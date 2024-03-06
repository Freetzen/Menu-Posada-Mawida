import { findTeaFood } from "../services/teaFoodServices.js"


const getTeaFoodController = async (req, res) => {
    try {
        const midAfterFood = await findTeaFood()
        if(midAfterFood){
            return res.status(200).json(midAfterFood)
        }
        res.status(404).json({error: 'No se encontro media tarde.'})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default getTeaFoodController