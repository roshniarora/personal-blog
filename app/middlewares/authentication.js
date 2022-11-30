const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')
    ? req.header('Authorization').split(' ')[1]
    : null;
  //   console.log(token, '::::::::::::::::::::::::::');
  let tokenData;
  try {
    tokenData = jwt.verify(token, process.env.SECRET_TOKEN);
    User.findById(tokenData._id)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (e) {
    res.json(e.message);
  }
};

module.exports = {
  authenticateUser,
};