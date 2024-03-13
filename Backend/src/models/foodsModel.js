import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  accompaniment: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true
  },
  image:{
    type: String,
    required: false,
  },
  stock: {
    type: Boolean,
    default: true
  },
  category: {
    type: Array,
    default: []
  }
})

const foodModel = model("food", foodSchema)

export default foodModel