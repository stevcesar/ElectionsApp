import {validationResult} from "express-validator";

const validateFields = (req,res,next)=>{
    //Error handling
    const errors = validationResult(req);       
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    //If there are no errors
    next();
}

export default validateFields;