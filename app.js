const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/commentsDB");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

const Comment = new mongoose.model("Comment", CommentSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/comments", async (req, res) => {
  
  const commentsFromDB = await Comment.find();

  res.json(
    commentsFromDB
  );
});

app.get("/comments/bd150d38-a183-4cfc-9b00-df033b5dd558", (req, res) => {
  res.json([
    {
      comment: "Yo",
      name: "Adrian"
    }
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
