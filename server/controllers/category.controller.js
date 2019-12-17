const Categories = require('../models/category.model');

exports.createNewCategory = function (request, response) {
  const category = new Categories(request.body);
  category.save();
  response.send(category);
};

exports.getAllCategories = function (request, response) {
  const categories = Categories;
  response.send(categories.getAllCategorys());
};
