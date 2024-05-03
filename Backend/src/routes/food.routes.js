import express from "express";
import { postFoodController } from "../controllers/postFoodController.js";
import { getFoodController } from "../controllers/getFoodController.js";
import { putFoodController } from "../controllers/putFoodController.js";
import getFoodByNameController from "../controllers/getFoodByNameController.js";
import getFoodByIdController from "../controllers/getFoodByIdController.js";
import deleteFoodController from "../controllers/deleteFoodController.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router()

router.get('/food', getFoodController)
router.get('/food/name', getFoodByNameController)
router.get('/food/id', getFoodByIdController)
router.post('/food', authJWT, postFoodController)
router.put('/food', putFoodController)
router.delete('/food', deleteFoodController)

export default router