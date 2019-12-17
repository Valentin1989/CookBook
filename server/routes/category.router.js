const express = require("express");
const categoryController = require('../controllers/category.controller');
const categoryRouter = express.Router();

categoryRouter.post("/create", categoryController.createNewCategory);

categoryRouter.get('/getAllCategories', categoryController.getAllCategories);

module.exports = categoryRouter;
