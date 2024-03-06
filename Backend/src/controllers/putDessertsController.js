import { updateDessert } from '../services/dessertsServices.js'

const putDessertsController = async (req, res) => {
    try {
        const {id, name, price, image, category} = req.body
        if(id){
            const desserts = await updateDessert(id, {
                name,
                price,
                image,
                category
            })
            return res.status(200).json(desserts)
        }
        res.status(404).json({error: 'Por favor, proporcione un ID del postre a actualizar.'})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default putDessertsController