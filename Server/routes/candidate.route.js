import { Router } from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import { getCandidates } from "../controllers/candidate.controller.js";

const router = Router();

router.use(validateJWT);
router.get("/",getCandidates);

export default router;