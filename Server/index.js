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
import { createCandidate } from "./controllers/candidate.controller.js";
import candidateRoutes from "./routes/candidate.route.js"
import validateJWT from "./middlewares/validateJWT.middleware.js";
import centerRouter from "./routes/center.route.js";
import electionRoutes from "./routes/election.route.js";
import tableRoutes from "./routes/table.route.js";
import voteRouter from "./routes/vote.route.js";

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
    "/api/auth/create",
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
app.post(
    "/api/candidate/create",
    [//middlewares
        validateJWT,
        check('firstName','The first name is required').not().isEmpty(),
        check('lastName','The last name is required').not().isEmpty(),
        check('dpi','The dpi is required and equal to 13 characters').isLength({min:13}),
        check('politicalParty','The political party is required').not().isEmpty(),
        check('election','The type of election is required').isMongoId(),
        validateFields,
        upload.single("picture"),

    ],
    createCandidate
);
/* ROUTES */
app.use("/api/auth",authRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/center",centerRouter);
app.use("/api/election",electionRoutes);
app.use("/api/table", tableRoutes);
app.use("/api/vote",voteRouter);

/* DATABASE */
dbConnection();
/* LISTEN REQUEST */
const PORT = process.env.PORT || 6001;
app.listen(PORT, ()=>{
    console.log(`Server Port: ${PORT}`)
})


