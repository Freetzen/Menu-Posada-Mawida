import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: false,
  },
  role:{
    type: String,
    default: "user"
  }
});

const userModel = model("user", userSchema)

export default userModel;
