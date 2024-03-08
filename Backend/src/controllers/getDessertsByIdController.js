import { findDessertById } from "../services/dessertsServices.js"

const getDessertsByIdController = async (req, res) => {
    try {
        const {id} = req.query
        const getIdDessert = await findDessertById(id)
        res.status(200).json(getIdDessert)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default getDessertsByIdController