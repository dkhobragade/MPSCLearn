import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileno:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
},
    { timestamps:true }
)

const User = mongoose.model('User',userSchema)

export default User