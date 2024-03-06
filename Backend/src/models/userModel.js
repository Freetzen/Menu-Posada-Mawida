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
  }
});

const userModel = model("user", userSchema)

export default userModel;
