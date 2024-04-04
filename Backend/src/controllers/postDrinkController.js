import { createDrink } from '../services/drinkServices.js';

const postDrinkController = async (req, res) => {
    try {
        const { name, price, image, category, description } = req.body;

        function capitalizarPrimeraLetra(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }

        let nameToUpperCase = capitalizarPrimeraLetra(name)

        if (nameToUpperCase && price) {
          const drink = await createDrink({
            name: nameToUpperCase,
            description,
            price,
            image,
            category
          });
          return res.status(200).json(drink);
        }
        res.status(200).json({error: 'Falta información para crear la bebida.'})
      } catch (error) {
        res.status(500).json(error.message);
      }
}

export default postDrinkController