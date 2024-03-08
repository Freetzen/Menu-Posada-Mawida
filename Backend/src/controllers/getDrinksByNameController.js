import { findDrinkByName } from '../services/drinkServices.js'

const getDrinksByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const dataNameDrink = await findDrinkByName(name);
    res.status(200).json(dataNameDrink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getDrinksByNameController