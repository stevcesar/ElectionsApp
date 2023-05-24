import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    picturePath: {
        type: String,
        default: "",
    },
    rol: {
        type: String,
        required: true,
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
    enable: {
        type: Boolean,
        required: true,
        default: true,
    }
});

UserSchema.method('toJSON', function(){
    const {__v, ...object} = this.toObject();
    return object;
});

const User = mongoose.model("User", UserSchema);
export default User;