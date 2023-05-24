import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import dbConnection from "./database/config.js"
import { createUser } from "./controllers/auth.controller.js";
import { check } from "express-validator";
import validateFields from "./middlewares/validateFields.middleware.js";
import authRoutes from "./routes/auth.route.js";

/* SERVER CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,"public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({storage});

/* ROUTES WITH FILES */
app.post(
    "/api/auth/register",
    [//middlewares
        check('firstName','The first name is required').not().isEmpty(),
        check('lastName','The last name is required').not().isEmpty(),
        check('email','The email is required').isEmail(),
        check('password','password must be longer than 6 characters').isLength({min: 6}),
        check('rol','The rol is required').not().isEmpty(),
        check('table','The table is required').isMongoId(),
        validateFields,
        upload.single("picture"),
    ],
    createUser
);
/* ROUTES */
app.use("/api/auth",authRoutes);

/* DATABASE */
dbConnection();
/* LISTEN REQUEST */
const PORT = process.env.PORT || 6001;
app.listen(PORT, ()=>{
    console.log(`Server Port: ${PORT}`)
})


