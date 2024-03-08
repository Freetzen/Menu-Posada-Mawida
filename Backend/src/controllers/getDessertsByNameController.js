import { findDessertByName } from "../services/dessertsServices.js";

const getDessertsByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const dataNameDesserts = await findDessertByName(name);
    res.status(200).json(dataNameDesserts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getDessertsByNameController