import { createFood } from "../services/foodServices.js";

export const postFoodController = async (req, res) => {
    try {
        const {name, accompaniment, price, image, category} = req.body

        function capitalizarPrimeraLetra(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }

        capitalizarPrimeraLetra(name)
        
        if(name && price){
            const food = await createFood({
                name,
                accompaniment,
                price,
                image,
                category
              })
              if(food){
                return res.status(200).json(food);
            }
        }else{
            return res.status(200).json({error: 'Falta información'})
        }
      
      res.status(404).json({error: 'Food not found'})
    } catch (error) {
      res.status(500).json(error.message)
    }
}