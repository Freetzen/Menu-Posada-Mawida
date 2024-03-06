import { Schema, model } from "mongoose";

const midAfterFoodSchema = new Schema({
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

const midAfterFoodModel = model("midAfterFood", midAfterFoodSchema)

export default midAfterFoodModel;