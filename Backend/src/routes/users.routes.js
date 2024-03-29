import express from "express";
import getUserAdminController from "../controllers/getUserAdminController.js";
import postUserAdminController from "../controllers/postUserAdminController.js";
import validatingController from "../controllers/validatingController.js";
import deleteCookieController from "../controllers/deleteCookieController.js";

const router = express.Router()

router.get('/destroysession', deleteCookieController)
router.post('/validating', validatingController)
router.post('/puseradminm', getUserAdminController)
router.post('/pcreateuseradminm', postUserAdminController)

export default router