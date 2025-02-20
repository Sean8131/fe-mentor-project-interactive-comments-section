import express from "express";
import Comment from "./model.js";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/comments", async (req, res) => {
  const commentsFromDB = await Comment.find().lean();

  res.json(commentsFromDB);
});

app.post("/comments", async (req, res) => {
  const addComment = await Comment.create({
    name: req.body.name,
    comment: req.body.comment,
  });

  res.status(201).json(addComment);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
