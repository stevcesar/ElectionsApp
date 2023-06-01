import { Router } from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import validateFields from "../middlewares/validateFields.middleware.js";
import { createVote, getTotalVotes } from "../controllers/vote.controller.js";

const router = Router();

router.use(validateJWT);
router.post(
    "/create",
    [
        check("voter","The voter is required").isMongoId(),
        check("candidates","The candidate is required").isArray(),
        validateFields
    ],
    createVote
);
router.get("/:rol",getTotalVotes)

export default router;