import mongoose from "mongoose";

const TableSchema = new mongoose.Schema({
    number:{
        type: Number,
        required: true
    },
    center:{
        type: Schema.Types.ObjectId,
        ref: 'Center',
        required: true,
    },
    close: {
        type: Boolean,
        default: false,
    },
    enable: {
        type: Boolean,
        default: false,
    }
})

TableSchema.method('toJSON', function(){
    const {__v,...object}= this.toObject();
    return object;
});

const Table = mongoose.model("Table", TableSchema);
export default Table;