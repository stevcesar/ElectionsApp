import jwt from "jsonwebtoken";

const generateJWT = (_id,firstName,lastName)=>{
    return new Promise((resolve, reject)=>{
        const payload = {_id, firstName, lastName};
        jwt.sign(payload,process.env.SECRET_JWT_SEED,{
            expiresIn: '2h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject("Failed to generate the jwt");
            }
            resolve(token);
        });
    });
};

export default generateJWT;