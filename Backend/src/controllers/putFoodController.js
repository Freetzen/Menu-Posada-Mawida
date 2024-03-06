import { updateFood } from "../services/foodServices.js"

export const putFoodController = async (req, res) => {
    try {
        const {name, accompaniment, price, category} = req.body
      const food = await updateFood({
        name,
        accompaniment,
        price,
        category
      })
      if(food){
          return res.status(200).json(food)
      }
      res.status(404).json({error: 'Food not found'})
    } catch (error) {
      res.status(500).json(error.message)
    }
}