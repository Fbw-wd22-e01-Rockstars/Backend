import mongoose from "mongoose";
import { userSchema } from "../models/userModel.js";

const Identifier = mongoose.Schema({
  cardCode: String,
  user: userSchema,
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

const identifierModel = mongoose.model("identifier", Identifier);

export default identifierModel;
