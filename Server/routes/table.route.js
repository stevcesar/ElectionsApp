import { Router } from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import validateFields from "../middlewares/validateFields.middleware.js";
import { createTable, getTables } from "../controllers/table.controller.js";

const router = Router();

router.use(validateJWT);
router.post(
    "/create",
    [
        check("number","The number is required").isLength({min:1}),
        check("center","The center is required").isMongoId(),
        validateFields
    ],
    createTable
);
router.get("/",getTables);

export default router;