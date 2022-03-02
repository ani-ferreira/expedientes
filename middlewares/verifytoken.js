const jwt = require('jsonwebtoken');
require('dotenv').config();

//Middleware fn to protect routes
//only get access if user is logged in (= has token)

module.exports = function (req, res, next) {
  const authHeader = req.header('authorization');
  if (!authHeader?.startsWith('Bearer '))
    return res.status(401).send('access denied');

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req._id = decoded.UserInfo._id;
    req.role = decoded.UserInfo.role;
    next();
  });
};
