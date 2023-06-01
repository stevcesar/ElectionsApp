import mongoose, { mongo } from "mongoose";

const VoteSchema = new mongoose.Schema({
    voter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Voter',
        required: true
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true
    },
    date:{
        type: Date,
        required: true,
    }
});

VoteSchema.method('toJSON', function(){
    const {__v, ...object} = this.toObject();
    return object;
});

const Vote = mongoose.model("Vote", VoteSchema);
export default Vote;
