import mongoose from "mongoose";
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

export default Comment;