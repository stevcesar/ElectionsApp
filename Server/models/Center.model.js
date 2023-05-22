import mongoose from "mongoose";

const CenterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 2,
    },
    address:{
        type: String,
        required: true,
        min: 5,
    },
    contact:{
        type: String,
        required: true,
        min: 8,
        max: 8,
    }

});

CenterSchema.method('toJSON', function(){
    const {__v,...object}= this.toObject();
    return object;
});

const Center = mongoose.model("Center", CenterSchema);
export default Center;