import { Router } from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import validateFields from "../middlewares/validateFields.middleware.js";
import { createVote, getVotes } from "../controllers/vote.controller.js";

const router = Router();

router.use(validateJWT);
router.post(
    "/create",
    [
        check("voter","The voter is required").isMongoId(),
        check("candidate","The candidate is required").isMongoId(),
        validateFields
    ],
    createVote
);
router.get("/",getVotes)

export default router;