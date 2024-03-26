import { findDrinkById } from "../services/drinkServices.js";

const getDrinksByIdController = async (req, res) => {
    try {
        const {id} = req.query
        const getIdDrink = await findDrinkById(id)
        res.status(200).json(getIdDrink)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getDrinksByIdController