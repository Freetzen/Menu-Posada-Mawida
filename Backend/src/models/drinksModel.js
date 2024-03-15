import { Schema, model } from "mongoose";

const drinksSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false,
  },
  productype: {
    type: String,
    required: false,
    default: 'drinks',
  },
  stock: {
    type: Boolean,
    default: true
  },
  category: {
    type: Array,
    default: [],
    required: true
  }
});

const drinksModel = model("drink", drinksSchema)

export default drinksModel;
