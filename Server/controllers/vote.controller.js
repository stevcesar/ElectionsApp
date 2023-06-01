import Vote from "../models/Vote.model.js";
import Voter from "../models/Voter.model.js";
import Candidate from "../models/Candidate.model.js";
import Election from "../models/Election.model.js";
import mongoose from "mongoose";

export const createVote = async(req,res)=>{
    //Extract variables from body.
    const {voter,candidates}=req.body;
    try {
        //Check if the voter and candidate exists.
        const infvoter = await Voter.findOne({_id: voter})
        const infcandidate = await Candidate.findOne({_id: {$in: candidates.map(id => mongoose.Types.ObjectId.createFromHexString(id.candidate))}});
        if(!infvoter || !infcandidate){
            return res.status(400).json({
                ok: false,
                msg: "The voter or candidate does not exist."
            })
        }
        if(!infvoter.registered) {
          return res.status(400).json({
            ok: false,
            msg: "The voter is not registered"
        })
        }
        //If the voter and candidate exists.
        
        candidates.forEach(async(candidate)=>{
          const vote = new Vote({voter,candidate: candidate.candidate,date: new Date()});
          await vote.save();
        })
        return res.status(201).json({
            ok: true,
            msg: "The vote is saved"
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

export const getTotalVotes = async(req,res)=>{
    //Extract variables from body.
    const {rol} = req.body;
    try {
        //Check if the user has access.
        if(rol !== "Admin"){
            return res.status(401).json({
                ok: false,
                msg: "You don't have access"
            })
        }
        //If the user has access.
        const votes = await Vote.aggregate([
            {
                $lookup: {
                  from: 'candidates',
                  localField: 'candidate',
                  foreignField: '_id',
                  as: 'candidateData'
                }
              },
              {
                $unwind: '$candidateData'
              },
              {
                $lookup: {
                  from: 'elections',
                  localField: 'candidateData.election',
                  foreignField: '_id',
                  as: 'electionData'
                }
              },
              {
                $unwind: '$electionData'
              },
              {
                $group: {
                  _id: {
                    candidate: {
                      firstName: '$candidateData.firstName',
                      lastName: '$candidateData.lastName'
                    },
                    election: '$electionData.name'
                  },
                  totalVotes: { $sum: 1 }
                }
              }
        ])
        //Response
        res.status(200).json({
            ok: true,
            votes
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