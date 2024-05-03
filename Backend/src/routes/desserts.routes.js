import express from "express";
import getDessertsController from "../controllers/getDessertsController.js";
import postDessertsController from "../controllers/postDessertsController.js";
import putDessertsController from "../controllers/putDessertsController.js";
import getDessertsByNameController from "../controllers/getDessertsByNameController.js";
import getDessertsByIdController from "../controllers/getDessertsByIdController.js";
import deleteDessertController from "../controllers/deleteDessertController.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router()

router.get('/desserts', getDessertsController)
router.get('/desserts/name', getDessertsByNameController)
router.get('/desserts/id', getDessertsByIdController)
router.post('/desserts', postDessertsController)
router.put('/desserts', putDessertsController)
router.delete('/desserts', deleteDessertController)

export default router