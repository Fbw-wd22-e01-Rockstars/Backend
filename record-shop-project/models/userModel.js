import mongoose from "mongoose";
import { AddressSchema } from "./addressSchema.js";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: AddressSchema,
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
