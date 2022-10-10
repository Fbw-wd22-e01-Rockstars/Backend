import express from "express";
import { getPosts, createPost } from "../controllers/postControllers.js";

const router = express.Router();

//http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPost);

//Update

//DELETE

export default router;
