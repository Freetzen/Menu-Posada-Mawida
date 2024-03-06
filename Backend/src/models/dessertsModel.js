import { Schema, model } from "mongoose";

const dessertsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
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

const dessertsModel = model("dessert", dessertsSchema)

export default dessertsModel;
