const express = require("express");
const app = express();
const userRouter = require("./routes/user.router.js");
const categoryRouter = require('./routes/category.router');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());

app.use('/user', userRouter);
app.use('/category', categoryRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found")
});

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
