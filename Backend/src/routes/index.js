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
import getDrinksByNameController from "../controllers/getDrinksByNameController.js";
import getFoodByNameController from "../controllers/getFoodByNameController.js";
import getDessertsByNameController from "../controllers/getDessertsByNameController.js";
import getDrinksByIdController from "../controllers/getDrinksByIdController.js";
import getFoodByIdController from "../controllers/getFoodByIdController.js";
import getDessertsByIdController from "../controllers/getDessertsByIdController.js";

const router = express.Router();

router.get('/food', getFoodController)
router.get('/food/name', getFoodByNameController)
router.get('/food/id', getFoodByIdController)
router.post('/food', postFoodController)
router.put('/food', putFoodController)

router.get('/desserts', getDessertsController)
router.get('/desserts/name', getDessertsByNameController)
router.get('/desserts/id', getDessertsByIdController)
router.post('/desserts', postDessertsController)
router.put('/desserts', putDessertsController)

router.get('/drinks', getDrinksController)
router.get('/drinks/name', getDrinksByNameController)
router.get('/drinks/id', getDrinksByIdController)
router.post('/drinks', postDrinkController)
router.put('/drinks', putDrinkController)

router.get('/puseradminm', getUserAdminController)
router.post('/puseradminm', postUserAdminController)



export default router