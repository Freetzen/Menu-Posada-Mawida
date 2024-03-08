import express from "express";
import { postFoodController } from "../controllers/postFoodController.js";
import { getFoodController } from "../controllers/getFoodController.js";
import { putFoodController } from "../controllers/putFoodController.js";
import getDessertsController from "../controllers/getDessertsController.js";
import postDessertsController from "../controllers/postDessertsController.js";
import putDessertsController from "../controllers/putDessertsController.js";
import getDrinksController from "../controllers/getDrinksController.js";
import postDrinkController from "../controllers/postDrinkController.js";
import putDrinkController from "../controllers/putDrinkController.js";
import getUserAdminController from "../controllers/getUserAdminController.js";
import postUserAdminController from "../controllers/postUserAdminController.js";

const router = express.Router();

router.get('/food', getFoodController)
router.post('/food', postFoodController)
router.put('/food', putFoodController)

router.get('/desserts', getDessertsController)
router.post('/desserts', postDessertsController)
router.put('/desserts', putDessertsController)

router.get('/drinks', getDrinksController)
router.post('/drinks', postDrinkController)
router.put('/drinks', putDrinkController)

router.get('/puseradminm', getUserAdminController)
router.post('/puseradminm', postUserAdminController)



export default router