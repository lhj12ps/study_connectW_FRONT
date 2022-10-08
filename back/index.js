const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const cookieParser = require("cookie-parser");
const http = require("http");

const app = express();
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

server.listen(4001);
