import mongoose from "mongoose";

const VoterSchema = new mongoose.Schema({
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
    birthdate: {
        type: Date,
        require: true
    },
    registered:{
        type: Boolean,
        required: true,
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
});

VoterSchema.method('toJSON', function(){
    const {__v, ...object} = this.toObject();
    return object;
});

const Voter = mongoose.model("Voter", VoterSchema);
export default Voter;