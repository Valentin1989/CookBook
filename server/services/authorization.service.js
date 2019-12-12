const jwt = require('jsonwebtoken');
const Users = require('../models/users.model');

exports.authorization = function (request, response) {
  const user = Users.getAll().find(user => user.email === request.body.email);
    if (!user || request.body.password !== user.password) {
      response.sendStatus(401);
    }
    let token = jwt.sign({userID: user.email}, 'app-shared-secret', {expiresIn: '2h'});
    response.send({jwtToken: token});
};
