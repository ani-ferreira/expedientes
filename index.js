const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//connect to DB
mongoose.connect(process.env.DB_CONNECTION);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/posts", require("./routes/post"));

app.get("/", (req, res) => {
  res.send({ Project: "MERN CRUD" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
