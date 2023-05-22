import mongoose, { mongo } from "mongoose";

const CandidateSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    politicalParty: {
        type: String,
        required: true,
    },
    election: {
        type: Schema.Types.ObjectId,
        ref: 'Election',
        required: true
    },
    enable: {
        type: Boolean,
        default: true,
    }
});

CandidateSchema.method('toJSON', function(){
    const {__v, ...object} = this.toObject();
    return object;
});

const Candidate = mongoose.model("Candidate", CandidateSchema);
export default Candidate;
