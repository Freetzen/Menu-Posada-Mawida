import { createDessert } from "../services/dessertsServices.js";

const postDessertsController = async (req, res) => {
  try {
    const { name, price, image, category } = req.body;
    if (name && price) {
      const desserts = await createDessert({
        name,
        price,
        image,
        category
      });
      return res.status(200).json(desserts);
    }
    res.status(404).json({error: 'Falta información.'})
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default postDessertsController;
