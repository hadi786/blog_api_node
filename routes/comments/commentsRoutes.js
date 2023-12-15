const express = require('express');
const { commentCtrl, createCommentCtrl, updateCommentCtrl, singleCommentCtrl, deleteCommentCtrl } = require('../../controllers/comments/commentCtrl');

const commentsRouter = express.Router();

// GET/api/v1/comments
commentsRouter.get("/", commentCtrl);

// POST/api/v1/comments
commentsRouter.post("/", createCommentCtrl);

// PUT/api/v1/comments/:id
commentsRouter.put("/:id", updateCommentCtrl);

// GET/api/v1/comments/:id
commentsRouter.get("/:id", singleCommentCtrl);

// GET/api/v1/comments/:id
commentsRouter.delete("/:id", deleteCommentCtrl);

module.exports = commentsRouter;