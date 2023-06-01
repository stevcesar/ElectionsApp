import { Router } from "express";
import { check } from "express-validator";
import validateJWT from "../middlewares/validateJWT.middleware.js";
import validateFields from "../middlewares/validateFields.middleware.js";
import { createTable, getTable, getTables, updateTableVoting } from "../controllers/table.controller.js";

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
router.patch(
    "/update/voting/:_id/:voting/:voter",
    [
        check("_id","The table is required").isMongoId(),
        check("voting","The voting is required").isBoolean(),
        check("voter","The voter is required").isString(),
        validateFields
    ],
    updateTableVoting
);
router.get(
    "/:_id",
    [
        check("_id","The table is required").isMongoId(),
        validateFields
    ]
    ,getTable
    );
router.get("/all",getTables);

export default router;