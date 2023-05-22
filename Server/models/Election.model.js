import mongoose from "mongoose";

const ElectionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 2
    },
    enable: {
        type: Boolean,
        default: true
    }
});

ElectionSchema.method('toJSON', function(){
    const {__v,...object}= this.toObject();
    return object;
});

const Election = mongoose.model("Election", ElectionSchema);
export default Election;