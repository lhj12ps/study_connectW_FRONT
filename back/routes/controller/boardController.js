const pool = require("../../db/db.js");
const Board = require("../../models/board");
const Comment = require("../../models/comment");

const option = {
  result: 0,
};

exports.createBoard = async (req, res) => {
  try {
    const { u_id, boardTitle, boardText } = req.body;
    const response = await Board.create({
      u_id,
      boardTitle,
      boardText,
    });
    // console.log(response.dataValues)
    res.json(response.dataValues);
  } catch (e) {
    console.log("createBoard 에러발생", e.message);
  }
};

exports.updateBoard = async (req, res) => {
  try {
    const query = "INSERT";
    const [result] = await pool.execute();
  } catch (e) {
    console.log("updateBoard 에러발생", e.message);
  }
};

exports.deleteBoard = async (req, res) => {
  try {
  } catch (e) {
    console.log("deleteBoard 에러발생", e.message);
  }
};

exports.viewBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Board.findOne({
      where: {
        id,
      },
    });
    const data = response.dataValues;
    res.json(data);
  } catch (e) {
    console.log("viewBoard 에러발생", e.message);
  }
};

exports.boardList = async (req, res) => {
  try {
    const response = await Board.findAll({});
    res.json(response);
  } catch (e) {
    console.log("boardList 에러발생", e.message);
  }
};

exports.creatComment = async (req, res) => {
  try {
    const { commentText, id } = req.body;
    console.log("웃어서 눈물나 : ", commentText);
    const response = await Comment.create({
      boardId: id,
      u_id: "33",
      commentText,
    });
    console.log(response.dataValues);
    const viewResponse = await Comment.findAll({
      where: { boardId: id },
      attributes: ["u_id", "commentText", "createdAt", "updatedAt"],
    });
    res.json(viewResponse);
  } catch (e) {
    console.log("creatComment 에러발생", e.message);
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { id, boardId, commentText } = req.body;
    const response = await Comment.update(
      { commentText },
      { where: { boardId, id } }
    );
    option.result = response[0];
    console.log('update response : ',response[0])
    res.json(option);
  } catch (e) {
    console.log("creatComment 에러발생", e.message);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id, boardId } = req.body;
    const response = await Comment.destroy({
      where: { boardId, id },
    });
    option.result = response;
    console.log('delete response : ',response)
    res.json(option);
  } catch (e) {
    console.log("creatComment 에러발생", e.message);
  }
};

exports.viewComment = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Comment.findAll({
      where: { boardId: id },
    });
    res.json(response);
  } catch (e) {
    console.log("creatComment 에러발생", e.message);
  }
};
