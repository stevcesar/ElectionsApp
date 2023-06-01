import Candidate from "../models/Candidate.model.js";
import Election from "../models/Election.model.js";

/* CREATE CANDIDATE */
export const createCandidate = async(req,res)=>{
    //Extract variables from body.
    const {dpi,election} = req.body;
    try {
        //Check if the candidate exists.
        let candidate = await Candidate.findOne({dpi});
        if(candidate){
            return res.status(400).json({
                ok: false,
                msg: "Candidate already exists"
            });
        }
        let infelection = await Election.findOne({_id: election})
        if(!infelection){
            return res.status(400).json({
                ok: false,
                msg: "Election does not exists"
            });
        }
        //If the candidate does not exist. 
        candidate = new Candidate(req.body);
        await candidate.save();
        //Response
        res.status(201).json({
            ok: true,
            _id: candidate._id,
            firstName: candidate.firstName,
            lastName: candidate.lastName,
            election: infelection.name,
            politicalParty: candidate.politicalParty
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

/* GET CANDIDATES */
export const getCandidates= async(req,res)=>{
    try {
        const candidates = await Candidate.find({enable: true}).populate({path:'election', select:'name enable'});
        res.status(200).json({
            ok: true,
            candidates
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