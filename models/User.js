const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  /* nuevo */
  role: {
    type: String,
    default: 'editor',
    required: true,
  },
});

module.exports = {
  User: mongoose.model('user', UserSchema),
};
