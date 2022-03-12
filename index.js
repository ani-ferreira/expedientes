const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const res = require('express/lib/response');
require('dotenv/config');
const path = require('path');

//Connect to DB
mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Import route & use middleware
//Posts
app.use('/posts', require('./routes/post'));

//Auth
app.use('/user', require('./routes/auth'));

//production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', () => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
