import { findFoodByName } from "../services/foodServices.js";

const getFoodByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const dataNameFood = await findFoodByName(name);
    res.status(200).json(dataNameFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getFoodByNameController