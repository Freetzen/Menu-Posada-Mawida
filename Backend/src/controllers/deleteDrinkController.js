import { deleteDrink } from "../services/drinkServices.js"

const deleteDrinkController = async(req, res) => {
  try {
    const {id} = req.body

    const deleteDrinkById = await deleteDrink(id)

    if(deleteDrinkById?.name){
        return res.status(200).json({deleted: true, message: `'${deleteDrinkById.name}' fue eliminado con éxito!!`})
    }else{
        return res.status(200).json({deleted: false, message: 'Error al eliminar el producto!'})
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
}

export default deleteDrinkController