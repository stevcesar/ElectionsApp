import Table from "../models/Table.model.js";
import Center from "../models/Center.model.js";
export const createTable = async(req,res)=>{
    //Extract variables from body.
    const {number, center} = req.body;
    try {
        //Check if the table exists for center.
        let table = await Table.findOne({number,center});
        if(table){
            return res.status(400).json({
                ok: false,
                msg: "Table already exists for center"
            })
        }
        //Check is the center exists.
        let infcenter = await Center.findOne({_id: center});
        if(!infcenter){
            return res.status(400).json({
                ok: false,
                msg: "Center does not exists"
            })
        }
        //If the table does not exist for center.
        table = new Table(req.body);
        await table.save();
        //Response
        res.status(201).json({
            ok: true,
            number: table.number,
            center: infcenter.name
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

/* GET TABLES */
export const getTables= async(req,res)=>{
    try {
        const tables = await Table.find().populate({path:'center', select:'name address'});
        res.status(200).json({
            ok: true,
            tables
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

export const getTable = async(req,res)=>{
    //Extract variables from params.
    const {_id} = req.params;    
    try {
        const table = await Table.findById(_id).populate('center','name');
        res.status(200).json({
            ok: true,
            table
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

export const updateTableVoting=async(req,res)=>{
    //Extract variables from params.
    const {_id,voting} = req.params;
    try {
        const table = await Table.findByIdAndUpdate(_id,{voting},{ new: true}).populate('center','name');
        res.status(200).json({
            ok: true,
            table
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