const express = require('express');
const { postCtrl, createPostCtrl, updatePostCtrl, singlePostCtrl, deletePostCtrl } = require('../../controllers/posts/postCtrl');

const postRouter = express.Router();

// GET/api/v1/posts
postRouter.get("/", postCtrl);

// POST/api/v1/posts
postRouter.post("/", createPostCtrl);

// PUT/api/v1/posts/:id
postRouter.put("/:id", updatePostCtrl);

// GET/api/v1/posts/:id
postRouter.get("/:id", singlePostCtrl);

// GET/api/v1/posts/:id
postRouter.delete("/:id", deletePostCtrl);

module.exports = postRouter;