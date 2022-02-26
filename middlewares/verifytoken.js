const jwt = require('jsonwebtoken');
require('dotenv').config();

//Middleware fn to protect routes
//only get access if user is logged in (= has token)

module.exports = function (req, res, next) {
  const token = req.header('authorization');
  if (!token) return res.status(401).send('access denied');

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req._id = decoded.UserInfo._id;
    req.role = decoded.UserInfo.role;
    next();
  });
};
