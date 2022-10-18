import express from "express";
import { getUsers, createUser } from "../controllers/userControllers.js";
//import { body } from "express-validator";

const router = express.Router();

//Get
router.get("/", getUsers);

//POST
router.post(
  "/create-user",
  // [
  //   body("firstName").notEmpty().withMessage("First name is required").trim(),
  //   body("email", "Email is required.").isEmail().normalizeEmail(),
  //   body(
  //     "password",
  //     "Password is required and length should be min 4 characters",
  //   )
  //     .isLength({ min: 4 })
  //     .custom((val, { req }) => {
  //       if (val !== req.body.confirm_password) {
  //         throw new Error("Password do not match!");
  //       } else {
  //         return val;
  //       }
  //     }),
  // ],
  createUser,
);

export default router;
