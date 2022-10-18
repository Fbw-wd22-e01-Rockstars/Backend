import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "The first name is required!"],
    trim: true,
    minLength: 4,
  },
  email: {
    type: String,
    required: [true, "The email is required!"],
    validate: [validator.isEmail, "Email is not valid!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: 4,
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm your password!"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Password do not match!",
    },
  },
});

userSchema.pre("save", function (next) {
  this.confirmPassword = undefined;
  next();
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
