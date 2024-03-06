import { Schema, model } from "mongoose";

const drinksSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  accompaniment: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: Array,
    default: [],
    required: true
  }
});

const drinksModel = model("drink", drinksSchema)

export default drinksModel;
