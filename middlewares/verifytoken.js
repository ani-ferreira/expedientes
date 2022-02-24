const jwt = require('jsonwebtoken');

//Middleware fn to protect routes
//only get access if user is logged in (= has token)

module.exports = function (req, res, next) {
  const token = req.header('authorization');
  if (!token) return res.status(401).send('access denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};
