import express from "express";
const router = express.Router();

import { userRules } from "../lib/validation/userRules.js";
import { validateInputs } from "../middleware/validator.js";

import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  userLogin,
} from "../controllers/usersController.js";

import auth from "../middleware/auth.js";

router.route("/").get(auth, getUsers).post(validateInputs(userRules), addUser);

router
  .route("/:id")
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .put(auth, updateUser);

router.post("/login", userLogin);

export default router;
