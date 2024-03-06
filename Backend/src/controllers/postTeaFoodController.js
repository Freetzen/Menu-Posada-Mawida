import { createTeaFood } from '../services/teaFoodServices.js';

const postTeaFoodController = async (req, res) => {
    try {
        const { name, price, image, category } = req.body;
        if (name && price) {
          const midAfterFood = await createTeaFood({
            name,
            price,
            image,
            category
          });
          return res.status(200).json(midAfterFood);
        }
        res.status(404).json({error: 'Falta información para crear la media tarde.'})
      } catch (error) {
        res.status(500).json(error.message);
      }
}

export default postTeaFoodController