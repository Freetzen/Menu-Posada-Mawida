import { findFoodById } from "../services/foodServices.js"

const getFoodByIdController = async (req, res) => {
    console.log('HOLA')
    try {
        const {id} = req.query
        console.log(req.query)
        const getIdFood = await findFoodById(id)
        console.log(getIdFood)
        res.status(200).json(getIdFood)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getFoodByIdController