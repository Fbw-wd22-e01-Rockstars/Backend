import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  message: String,
  name: String,
  likes: [],
  age: { type: Number, default: 36 },
  time: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
