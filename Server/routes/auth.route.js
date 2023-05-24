import { Router } from "express";
import { check } from "express-validator";
import validateFields from "../middlewares/validateFields.middleware.js";
import { loginUser,revalidateToken } from "../controllers/auth.controller.js";
import validateJWT from "../middlewares/validateJWT.middleware.js";

const ruoter = Router();

ruoter.post(
    "/",
    [
        check('email','The email is required').isEmail(),
        check('password','The password is required').not().isEmpty(),
        validateFields
    ],
    loginUser
    );

ruoter.get('/renew', validateJWT, revalidateToken);

export default ruoter;