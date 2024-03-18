import { Schema, model } from "mongoose";

const dessertsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  productype: {
    type: String,
    required: false,
    default: 'dessert',
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

const dessertsModel = model("dessert", dessertsSchema)

export default dessertsModel;
