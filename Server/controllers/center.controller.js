import Center from "../models/Center.model.js";

export const createCenter = async(req,res)=>{
    //Extract variables from body.
    const {name} = req.body;
    try {
        //Check if the center exists.
        let center = await Center.findOne({name});
        if(center){
            return res.status(400).json({
                ok:false,
                msg: "Center already exists"
            })
        }
        //If the center does not exist.
        center = new Center(req.body);
        await center.save();
        //Response
        res.status(201).json({
            ok: true,
            name: center.name,
            address: center.address,
            contact: center.contact
        })
    } catch (err) {
        // If there is an error, it is caught and a message is sent.
        console.log(err)
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }
}

export const getCenters = async(req,res)=>{
    try {
        const centers = await Center.find();
        res.status(200).json({
            ok: true,
            centers
        })
    } catch (err) {
        // If there is an error, it is caught and a message is sent.
        console.log(err)
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
        });
    }
}