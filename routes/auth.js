const router = require('express').Router();
const { User } = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verifyRoles = require('.././middlewares/verifyRole');

//Registration
router.post('/register', verifyRoles('admin'), async (req, res) => {
  //Validate data before save user
  //Joi: If the input is invalid, error is assigned a ValidationError
  //object providing more info.
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email already exist in db
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(401).send('Email already exists');

  //Hash & salt passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //If theres no errors, save user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login
router.post('/login', async (req, res) => {
  //Validate data before login
  const { error } = loginValidation(req.body);
  if (error) return res.status(401).send(error.details[0].message);

  //Check if email already exist in db
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('email not registrated');

  //Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  //Create and assign a token
  const token = jwt.sign(
    {
      UserInfo: {
        _id: user._id,
        role: user.role,
      },
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '1h' }
  );
  let role = '';

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.role = decoded.UserInfo.role;
    role = req.role;
  });

  res.header('authorization', token).send({ token, role });
});

module.exports = router;
