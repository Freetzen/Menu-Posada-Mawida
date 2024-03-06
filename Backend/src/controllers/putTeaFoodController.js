import { updateTeaFood } from "../services/teaFoodServices.js"

const putTeaFoodController = async (req, res) => {
    try {
        const {id, name, price, image, category} = req.body
        if(id){
            const midAfterFood = await updateTeaFood(id, {
                name,
                price,
                image,
                category
            })
            return res.status(200).json(midAfterFood)
        }
        res.status(404).json({error: 'Por favor, proporcione un ID de la media tarde a actualizar.'})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default putTeaFoodController