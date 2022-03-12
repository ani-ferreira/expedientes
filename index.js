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

// Accessing the path module
const path = require('path');

// Step 1: import the client build folder to the server
app.use(express.static(path.resolve(__dirname, './client/build')));

// Step 2: ensure that the routes defined with React Router are working once the application has been deployed
// It handles any requests by redirecting them to index.html
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
