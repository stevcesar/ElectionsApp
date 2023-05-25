import { Router } from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import validateFields from "../middlewares/validateFields.middleware.js";
import { createCenter, getCenters } from "../controllers/center.controller.js";
const router = Router();

router.use(validateJWT);
router.post(
    "/create",
    [
        check("name","The name is required").not().isEmpty(),
        check("address","The address is required").not().isEmpty(),
        check("contact","The contact is required").not().isEmpty(),
        validateFields
    ],
    createCenter
);
router.get("/",getCenters);

export default router;
