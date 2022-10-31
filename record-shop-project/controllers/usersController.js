//DB -----------------------------
//lowdb
// import { join, dirname } from "path";
// import { Low, JSONFile } from "lowdb";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

//Use JSON file for storage
// const file = join(__dirname, "../db.json");

// const adapter = new JSONFile(file);
// const db = new Low(adapter);
// await db.read();
// db.data ||= { records: [], users: [], orders: [] };

//------------------------------------------

// ------------  MongoDB -------------------
// import { MongoClient, ObjectId } from "mongodb";

// const url = "mongodb://localhost:27017";
// const dbName = "record-shop";

// -----------------------------------------

// ----------- mongoose ------------------
import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// -----------------------------------------

//Controllers

export const getUsers = async (req, res, next) => {
  // const { users } = db.data;
  // const resultArray = [];
  // MongoClient.connect(url, (err, client) => {
  //   const db = client.db(dbName);
  //   const collection = db.collection("users");
  //   const info = collection.find();
  //   info.forEach(
  //     function (doc) {
  //       resultArray.push(doc);
  //     },
  //     function () {
  //       res.json(resultArray);
  //     },
  //   );
  // });
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

export const getUser = async (req, res, next) => {
  // const { users } = db.data;
  // let myId = await users.find((v) => v.id === req.params.id);
  // const resultArray = [];
  // MongoClient.connect(url, (err, client) => {
  //   const db = client.db(dbName);
  //   const collection = db.collection("users");
  //   const info = collection.find({ _id: ObjectId(req.params.id) });
  //   info.forEach(
  //     function (doc) {
  //       resultArray.push(doc);
  //     },
  //     function () {
  //       res.json(resultArray);
  //     },
  //   );
  // });
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const deleteUser = async (req, res, next) => {
  //const { users } = db.data;
  //   let myId = await users.find((v) => v.id === req.params.id);
  //const removeIndex = users.findIndex((item) => item.id === req.params.id);
  // if (removeIndex != -1) {
  //   users.splice(removeIndex, 1);
  // }
  // await db.write();
  // MongoClient.connect(url, (err, client) => {
  //   const db = client.db(dbName);
  //   const collection = db.collection("users");
  //   collection.deleteOne({ _id: ObjectId(req.params.id) });
  //   res.status(200).json({ msg: "The user was successfully deleted.!" });
  // });
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const updateUser = async (req, res, next) => {
  // const { users } = db.data;
  // let user = await users.find((v) => v.id === req.params.id);
  // const { firstName, lastName, email, password } = req.body;
  // user.firstName = firstName;
  // user.lastName = lastName;
  // user.email = email;
  // user.password = password;
  // await db.write();
  // MongoClient.connect(url, (err, client) => {
  //   const db = client.db(dbName);
  //   const collection = db.collection("users");
  //   collection.updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
  //   res.status(200).json({ msg: "The user was successfully updated.!" });
  // });
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const addUser = async (req, res, next) => {
  // const { users } = db.data;
  // console.log(users);
  // users.push({ ...req.body, id: Date.now().toString() });
  // await db.write();
  // const user = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   password: req.body.password,
  // };
  // MongoClient.connect(url, (err, client) => {
  //   const db = client.db(dbName);
  //   const collection = db.collection("users");
  //   collection.insertOne(user);
  //   res.status(200).json(user);
  // });
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;
    //Check if user already exists
    let existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exists!" });
    }

    //Create a new user (don't save yet)
    const newUser = new userModel({
      firstName,
      lastName,
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
  } catch (e) {
    next(e);
  }
};

export const userLogin = async (req, res) => {
  //Code here

  try {
    const { email, password } = req.body;
    //User exists?
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not exists!" });
    }

    //Password isMatch?
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Password incorrect!" });
    }

    //Create a payload
    const payload = {
      user: {
        id: user._id,
        name: user.firstName,
      },
    };

    //Create a token and send
    jwt.sign(payload, "randomString", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, msg: "OK" });
    });
  } catch (error) {}
};
