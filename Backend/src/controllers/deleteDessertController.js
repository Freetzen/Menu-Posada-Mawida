import { deleteDessert } from "../services/dessertsServices.js"


const deleteDessertController = async(req, res) => {
try {
    const {id} = req.body
    
    const deleteDessertById = await deleteDessert(id)
    
    if(deleteDessertById?.name){
        return res.status(200).json({deleted: true, message: `'${deleteDessertById.name}' fue eliminado con éxito!!`})
    }else{
        return res.status(200).json({deleted: false, message: 'Error al eliminar el producto!'})
    }
    } catch (error) {
    res.status(500).json(error.message)
    }
}

export default deleteDessertController