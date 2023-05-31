import Voter from "../models/Voter.model.js";
import Vote from "../models/Vote.model.js";
import mongoose from "mongoose";

export const registerVoter = async(req,res)=>{
    //Extract variables from body.
    const {voter: idvoter} = req.body;
    try {
        //Check if the voter exists. 
        let voter = await Voter.findById(idvoter);
        if(!voter){
            return res.status(400).json({
                ok: false,
                msg: "The voter does not exist"
            })
        }
        //If the voter exists, the document is updated.
        voter = await Voter.findByIdAndUpdate(idvoter,{registered: true}, {new: true});
        //Response
        res.status(200).json({
            ok: true,
            voter
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

export const getVoter = async(req,res)=>{
    //Extract variables from params.
    const {dpi} = req.params;
    try {
        //Check if the voter exists. 
        let voter = await Voter.findOne({dpi});
        if(!voter){
            return res.status(400).json({
                ok: false,
                msg: "The voter does not exist"
            })
        }
        //If the voter exists, the document is updated.
        voter = await Voter.findOne({dpi}).populate(
            {path: 'table', 
            select: '_id number', 
            populate:{path: 'center', select: '_id name'}},
        );
        const voted = await Vote.exists({voter: voter._id})
        //Response
        res.status(200).json({
            ok: true,
            voter,
            voted: !!voted
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