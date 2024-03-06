import { findDessert } from "../services/dessertsServices.js"


const getDessertsController = async (req, res) => {
try {
    const desserts = await findDessert()
    if(desserts){
        return res.status(200).json(desserts)
    }
    res.status(404).json({error: 'No se encontraron postres.'})
} catch (error) {
    res.status(500).json(error.message)
}
}

export default getDessertsController