import jwt from "jsonwebtoken";

const generateJWT = (_id,name)=>{
    return new Promise((resolve, reject)=>{
        const payload = {_id, name};
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