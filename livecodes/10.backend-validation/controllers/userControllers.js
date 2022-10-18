import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";

export const getUsers = async (req, res) => {
  try {
    console.log(req.query.test);
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.send(error);
  }
};

export const createUser = async (req, res) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res
    //     .status(422)
    //     .json({ errors: errors.array().map((err) => err.msg) });
    // }

    // const user = req.body;
    // const newUser = new userModel(user);
    // await newUser.save();

    // res.json(newUser);
    userModel
      .init()
      .then((user) => {
        const newUser = user.create(req.body);
        return newUser;
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.json(err));
  } catch (error) {
    res.send(error);
  }
};
