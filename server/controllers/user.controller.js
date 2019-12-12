const Users = require('../models/users.model');
const authorizationService = require('../services/authorization.service');

exports.addNewUser = function (request, response) {
  const user = new Users(request.body);
  user.save();
  response.send('Новый юзер создан');
};

exports.authorizationUser = authorizationService.authorization;
