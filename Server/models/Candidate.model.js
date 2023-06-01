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
    dpi: {
        type: String,
        required: true,
        min : 13,
        max: 13
    },
    politicalParty: {
        type: String,
        required: true,
    },
    election: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Election',
        required: true
    },
    picturePath: {
        type: String,
        default: "",
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
