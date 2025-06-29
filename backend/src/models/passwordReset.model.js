import mongoose from "mongoose"

const passwordResetSchema = new mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    token:{
        type:String,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    }
})

const PasswordTokenSchema = mongoose.model('PasswordResetToken',passwordResetSchema)

export default PasswordTokenSchema