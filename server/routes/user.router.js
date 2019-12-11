const express = require("express");
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.post("/registerNewUser", userController.addNewUser);
userRouter.post("/login", userController.authorizationUser);

module.exports = userRouter;
