import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";

const router = express.Router();

//http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPost);

//Update
router.patch("/:id", updatePost);

//DELETE
router.delete("/:id", deletePost);
export default router;
