import express from "express";
import getDrinksController from "../controllers/getDrinksController.js";
import postDrinkController from "../controllers/postDrinkController.js";
import putDrinkController from "../controllers/putDrinkController.js";
import getDrinksByNameController from "../controllers/getDrinksByNameController.js";
import getDrinksByIdController from "../controllers/getDrinksByIdController.js";
import deleteDrinkController from "../controllers/deleteDrinkController.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router()

router.get('/drinks', getDrinksController)
router.get('/drinks/name', getDrinksByNameController)
router.get('/drinks/id', getDrinksByIdController)
router.post('/drinks', authJWT , postDrinkController)
router.put('/drinks', authJWT , putDrinkController)
router.delete('/drinks', authJWT , deleteDrinkController)

export default router