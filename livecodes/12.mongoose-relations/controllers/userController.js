import userModel from "../models/userModel.js";

import bcrypt from "bcryptjs";

export const userSignup = async (req, res) => {
  //Code is here

  const { firstName, email, password } = req.body;

  try {
    //Check if user already exists

    let existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User Already Exists" });
    }

    //Create a new user
    const newUser = new userModel({
      firstName,
      email,
      password, //"password": "1234"
    });

    //hash the password for the new user in order to save to DB
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    //Create a payload with user ID in order to create JWT

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUsers = async (req, res) => {
  //Code here
  try {
    const result = await userModel
      .find()
      .select("-password -__v")
      .sort("firstName");

    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
};
