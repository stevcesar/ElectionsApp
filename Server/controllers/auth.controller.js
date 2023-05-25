import bcrypt from "bcryptjs";
import User from "../models/User.model.js";
import generateJWT from "../helpers/jwt.helper.js";

/* CREATE USER */
export const createUser = async(req, res)=>{
    //Extract variables from body.
    const {email,password} = req.body;
    try {
        //Check if the email exists.
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                ok: false,
                msg: "User already exists"
            });
        }
        //If the user does not exist.
        user = new User(req.body);
        //Encrypt password.
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save();

        //Response.
        res.status(201).json({
            ok: true,
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName
        })
    } catch (err) {
        // If there is an error, it is caught and a message is sent.
        console.log(err)
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }
    
};

/* LOGGING IN */

export const loginUser = async(req,res)=>{
    //Extract variables from body.
    const {email,password}= req.body;
    try {
        //Check if the email exists.
        const user = await User.findOne({email});
        //If the user does not exist.
        if (!user){
            return res.status(400).json({
                ok: false,
                msg: "Incorrect email or password."
            })
        }
        //If the user is disable.
        if(!user.enable){
            return res.status(400).json({
                ok: false,
                msg: "Incorrect email or password."
            })
        }
        //If the user exists, the password is validated.
        const validPassword = bcrypt.compareSync(password,user.password);
        //If the password is wrong
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: "Incorrect email or password."
            })
        }
        //If the password is correct, the token is generated.
        const token = await generateJWT(user._id, user.firstName, user.lastName);
        res.status(201).json({
            ok: true,
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            picturePath: user.picturePath,
            rol: user.rol,
            table: user.table,
            token
        })
    } catch (err) {
        // If there is an error, it is caught and a message is sent.
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }
};

export const revalidateToken = async(req,res)=>{
    //Extract variables from request.
    const {_id, firstName, lastName} = req;
    //Generate the token
    const token = await generateJWT(_id,firstName,lastName);
    res.json({
        ok: true,
        _id, firstName, lastName,
        token
    });

};

