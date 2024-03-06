import { createDrink } from '../services/drinkServices.js';

const postDrinkController = async (req, res) => {
    try {
        const { name, price, image, category } = req.body;
        if (name && price) {
          const drink = await createDrink({
            name,
            price,
            image,
            category
          });
          return res.status(200).json(drink);
        }
        res.status(404).json({error: 'Falta información para crear la bebida.'})
      } catch (error) {
        res.status(500).json(error.message);
      }
}

export default postDrinkController