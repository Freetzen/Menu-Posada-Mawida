import { findFoodById } from "../services/foodServices.js"

const getFoodByIdController = async (req, res) => {
    try {
        const {id} = req.query
        const getIdFood = await findFoodById(id)
        res.status(200).json(getIdFood)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getFoodByIdController