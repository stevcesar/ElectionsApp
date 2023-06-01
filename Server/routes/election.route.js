import { Router } from "express";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import validateFields from "../middlewares/validateFields.middleware.js";
import { createElection, getElections } from "../controllers/election.controller.js";
import { check } from "express-validator";

const router = Router();

router.use(validateJWT);
router.post(
    "/create",
    [
        check("name","The name is required").not().isEmpty(),
        validateFields
    ],
    createElection
);
router.get("/",getElections);

export default router;