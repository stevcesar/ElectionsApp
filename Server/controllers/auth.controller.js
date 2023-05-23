import bcrypt from "bcryptjs";
import User from "../models/User.model.js";
import generateJWT from "../helpers/jwt.helper.js";

export const createUser = async(req, res)=>{
    //Extract variables from body
    const {email,password} = req.body;
    try {
        //Check if the email exists
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                ok: false,
                msg: "User already exists"
            });
        }
        //If the user does not exist
        user = new User(req.body)
        //Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save();

        //Response
        res.status(201).json({
            ok: true,
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }
    
};

