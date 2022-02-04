const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  fecha: {
    type: String,
    required: true,
  },
  expediente: {
    type: String,
    required: true,
  },
  movimiento: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
});

module.exports = {
  Post: mongoose.model('posts', PostSchema),
};
