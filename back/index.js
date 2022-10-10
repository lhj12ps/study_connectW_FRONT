const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
const morgan = require("morgan");
const { sequelize } = require("./models/index");

app.set("port", process.env.PORT || 4001);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connect!");
  })
  .catch((err) => {
    console.log("sequelize error!");
    console.error(err);
  });

const router = require("./routes/index");
const cookieParser = require("cookie-parser");
const http = require("http");
const server = http.createServer(app);

const corsOption = {
  origin: true,
  credentials: true,
};

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(router);
app.use(morgan("dev"));

server.listen(4001);
