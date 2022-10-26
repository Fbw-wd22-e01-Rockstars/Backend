import express from "express";
import {
  userSignup,
  userLogin,
  loggedIn,
} from "../controllers/userController.js";

import auth from "../middleware/auth.js";

const router = express.Router();

//POST request
router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/profile", auth, loggedIn);

export default router;
