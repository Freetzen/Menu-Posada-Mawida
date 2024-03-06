import { findDrink } from '../services/drinkServices.js'

const getDrinksController = async (req, res) => {
    try {
        const drinks = await findDrink()
        if(drinks){
            return res.status(200).json(drinks)
        }
        res.status(404).json({error: 'No se encontraron bebidas.'})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default getDrinksController