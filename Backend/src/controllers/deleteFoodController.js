import { deleteFood } from '../services/foodServices.js'

const deleteFoodController = async(req, res) => {
  try {
    const {id} = req.query

    const deleteFoodById = await deleteFood(id)

    if(deleteFoodById?.name){
        return res.status(200).json({deleted: true, message: `'${deleteFoodById.name}' fue eliminado con éxito!!`})
    }else{
        return res.status(200).json({deleted: false, message: `Error al eliminar el producto!`})
    }
  } catch (error) {
    
  }
}

export default deleteFoodController