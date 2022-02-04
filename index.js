const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Import route & use middleware
//Posts
app.use('/posts', require('./routes/post'));

//Auth
app.use('/user', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
