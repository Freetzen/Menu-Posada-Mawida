import { createDessert } from "../services/dessertsServices.js";

const postDessertsController = async (req, res) => {
  try {
    const { name, price, image, category } = req.body;

    function capitalizarPrimeraLetra(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let nameToUpperCase = capitalizarPrimeraLetra(name)

    if (nameToUpperCase && price) {
      const desserts = await createDessert({
        name: nameToUpperCase,
        price,
        image,
        category
      });
      return res.status(200).json(desserts);
    }
    res.status(200).json({error: 'Falta información.'})
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default postDessertsController;
