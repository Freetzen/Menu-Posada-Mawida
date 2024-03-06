import {findFood} from "../services/foodServices.js"


export const getFoodController = async (req, res) => {
  try {
    const food = await findFood()
    if(food){
        return res.status(200).json(food)
    }
    res.status(404).json({error: 'Food not found'})
  } catch (error) {
    res.status(500).json(error.message)
  }
}


