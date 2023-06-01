import { Router } from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import validateFields from "../middlewares/validateFields.middleware.js";
import { getVoter, registerVoter } from "../controllers/voter.controller.js";

const router = Router();
router.use(validateJWT);
router.post(
    "/update",
    [
        check("voter","The voter is required").isMongoId(),
        validateFields
    ],
    registerVoter
);
router.get(
    "/:dpi",
    [
        check('dpi','The dpi is required and equal to 13 characters').isLength({min:13}),
        validateFields
    ]
,getVoter);
export default router;