import Election from "../models/Election.model.js";

export const createElection = async(req,res)=>{
    //Extract variables from body.
    const {name} = req.body;
    try {
          //Check if the election exists.
          let election = await Election.findOne({name});
          console.log(election);
          if (election) {
            return res.status(400).json({
                ok: false,
                msg: "Election already exists"
            })
          }
          //If the election does not exist.
          election = new Election(req.body);
          await election.save();
          //Response
          res.status(201).json({
            ok: true,
            name: election.name,
            enable: election.enable
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

export const getElections = async(req,res)=>{
    try {
        const elections = await Election.find({enable: true});
        res.status(200).json({
            ok: true,
            elections
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