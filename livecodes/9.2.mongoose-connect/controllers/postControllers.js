import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

//update post
export const updatePost = async (req, res) => {
  try {
    const updatePost = await PostMessage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(201).json(updatePost);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};

//delete post
export const deletePost = async (req, res) => {
  try {
    await PostMessage.findByIdAndRemove(req.params.id);
    res.status(201).json({ msg: "Post deleted!" });
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};
