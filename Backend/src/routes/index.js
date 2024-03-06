import  express from "express";
import { postFoodController } from "../controllers/postFoodController.js";
import { getFoodController } from "../controllers/getFoodController.js";
import { putFoodController } from "../controllers/putFoodController.js";

const router = express.Router();

router.get('/food', getFoodController)
router.post('/food', postFoodController)
router.put('/food', putFoodController)


export default router