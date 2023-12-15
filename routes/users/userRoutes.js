const express = require('express');
const { userRegisterCtrl, userLoginCtrl, userUpdateCtrl, usersCtrl, userProfileCtrl, userDeleteCtrl } = require('../../controllers/users/userCtrl');

const userRouter = express.Router();

// POST/api/v1/users/register
userRouter.post("/register", userRegisterCtrl);

// POST/api/v1/users/login
userRouter.post("/login", userLoginCtrl);

// PUT/api/v1/users/:id
userRouter.put("/:id", userUpdateCtrl);

// GET/api/v1/users
userRouter.get("/", usersCtrl);

// GET/api/v1/users/profile/:id
userRouter.get("/profile/:id", userProfileCtrl);

// GET/api/v1/users/:id
userRouter.delete("/:id", userDeleteCtrl);

module.exports = userRouter;