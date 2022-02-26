const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyRoles = (allowedRoles) => {
  return (req, res, next) => {
    const token = req.header('authorization');
    if (!token) return res.status(401).send('access denied');

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403); //invalid token
      //decode JWT to check if role is matching with the one sent in props
      req._id = decoded.UserInfo._id;
      req.role = decoded.UserInfo.role;
      if (allowedRoles === req.role) next();
      else {
        res.status(401).send('Only admins allowed');
      }
    });
  };
};

module.exports = verifyRoles;
