import { createFood } from "../services/foodServices.js";

export const postFoodController = async (req, res) => {
    try {
        const {name, accompaniment, price, image, category} = req.body

        function capitalizeFirstLetter(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }

        let nameToUpperCase = capitalizeFirstLetter(name)

        if(nameToUpperCase && price && image){
            const food = await createFood({
                name: nameToUpperCase,
                accompaniment,
                price,
                image,
                category
              })
              if(food){
                return res.status(200).json(food);
            }
        }else{
            return res.status(200).json({error: 'Falta información. Revisar nombre, precio o imagen'})
        }
      
      res.status(404).json({error: 'Food not found'})
    } catch (error) {
      res.status(500).json(error.message)
    }
}