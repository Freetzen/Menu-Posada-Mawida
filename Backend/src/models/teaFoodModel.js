import { Schema, model } from "mongoose";

const teaFoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  image:{
    type: String,
    required: false,
  },
  category: {
    type: Array,
    default: [],
    required: true
  }
});

const teaFoodModel = model("teaFood", teaFoodSchema)

export default teaFoodModel;