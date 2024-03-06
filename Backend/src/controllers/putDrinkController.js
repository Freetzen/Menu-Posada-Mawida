import { updateDrink } from "../services/drinkServices.js"

const putDrinkController = async (req, res) => {
    try {
        const {id, name, price, image, category} = req.body
        if(id){
            const drink = await updateDrink(id, {
                name,
                price,
                image,
                category
            })
            return res.status(200).json(drink)
        }
        res.status(404).json({error: 'Por favor, proporcione un ID de la bebida a actualizar.'})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default putDrinkController