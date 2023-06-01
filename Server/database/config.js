import mongoose from "mongoose";
/* ADD DATA ONE TIME */
// import Voter from "../models/Voter.model.js";
// import Vote from "../models/Vote.model.js";
// import { voters,votes, candidates } from "../data/index.js";
// import Candidate from "../models/Candidate.model.js";

const dbConnection= async()=>{
    try {
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("DB Online");
        /* ADD DATA ONE TIME */
        // Voter.insertMany(voters);
        // Vote.insertMany(votes);
        // Candidate.insertMany(candidates)
        //Connection information
        // const connection = mongoose.connection;
        // console.log(connection);
    } catch (err) {
        console.log(`${err} did not connect`);
    }     
}

export default dbConnection;