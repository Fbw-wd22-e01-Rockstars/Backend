import express from "express";
import { userSignup, getUsers } from "../controllers/userController.js";

const router = express.Router();

//POSt request
router.post("/signup", userSignup);

//GET request
router.get("/getusers", getUsers);

export default router;
