import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  accompaniment: {
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
    default: []
  }
})

const foodModel = model("food", foodSchema)

export default foodModel