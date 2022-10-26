import userModel from "../models/userModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res) => {
  //Code here
  try {
    const { firstName, email, password } = req.body;
    //Check if user already exists
    let existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists!" });
    }

    //Create a new user (don't save yet)
    const newUser = new userModel({
      firstName,
      email,
      password, //"passeword": "1234"
    });

    //hash the password for the new user
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    //save user into DB
    await newUser.save();

    //response to FE
    //res.status(200).json(newUser);

    //Create a payload
    const payload = {
      id: newUser._id,
      name: newUser.firstName,
    };

    //Create a token and send
    jwt.sign(payload, "randomString", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, msg: "OK" });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
