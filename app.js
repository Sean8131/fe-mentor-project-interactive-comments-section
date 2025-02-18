import express from 'express';
import Comment from './model.js';
import mongoose from 'mongoose';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/comments", async (req, res) => {
  
  const commentsFromDB = await Comment.find().lean();

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
