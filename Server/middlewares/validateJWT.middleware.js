import jwt from "jsonwebtoken";

const validateJWT = (req, res, next)=>{
    //Extract variables from headers.
    const token = req.header('x-token');
    //If the token does not exist. 
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: "There is no token in the request."
        });
    };
    //If the token exists. 
    try {
        //Token is verified and the variables are obtained
        const {_id, firstName, lastName} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        req._id = _id;
        req.firstName = firstName;
        req.lastName = lastName;
    } catch (err) {
        //If token is invalid.
        return res.status(401).json({
            ok: false,
            msg: "Token is invalid"
        });
    }
    next();
}

export default validateJWT;