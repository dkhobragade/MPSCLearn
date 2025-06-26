import { sendResetEmail } from "../lib/sendEmail.js"
import { generateJWTToken } from "../lib/utils.js"
import PasswordTokenSchema from "../models/passwordReset.model.js"
import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup = async (req,res) => {

    const { fullname, email, mobileno, password} = req.body

    try {

        if (password.length < 6) return res.status(400).json({message:'Password must be atleast 6 charaacter'})

        const user = await User.findOne({email})
        const userMobileno = await User.findOne({mobileno})

        if (user) return res.status(400).json({message:'Email Already exists'})
        if (userMobileno) return res.status(400).json({message:'Mobile Number Already exists'})

        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            fullname,
            email,
            mobileno,
            password:hashpassword
        })


        if (newUser){
            generateJWTToken(newUser._id,res)
            await newUser.save()

            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                mobileno:newUser.mobileno,
                email:newUser.email
            })
        }
        else{
            res.status(400).json({message:"Invalid user data" })
        }

    } catch (error) {
        console.log("Error in singup controller",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const login = async (req,res) => {

    const { email , password } = req.body

    try {

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message:"Invalid credentials,user not exists"})
        }

        const isPasswordValid = await bcryptjs.compare(password,user.password)

        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid Password"})
        }

        generateJWTToken(user._id,res)

        res.status(200).json({
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            mobileno:user.mobileno,
            createdAt:user.createdAt
        })


    } catch (error) {
        console.log("Error while login",error.message)
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export const logout =(req,res)=>{
    try {

        res.cookie("jwt","",{
            maxAge:0,
            httpOnly :true,
            sameSite : "strict",
            secure : process.env.NODE_ENV !== "development"
        })
        return res.status(200).json({message:"Logout Successfully"})

    } catch (error) {
        console.log("Error in Logout",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const forgetPassword = async (req,res) => {

    const { email } = req.body

    try {

        const user = await User.findOne({email})

        if (!user) return res.status(400).json({message:"No user with this email."})

        await PasswordTokenSchema.deleteMany({userId : user._id})

        const token = "HQwdhC9OVrfFdQYtyHXAMpRQSXiCrGytgv1cAyfhk5r78ZiAaWLwKBM7ip3kcxeH"

        const resetToken = new PasswordTokenSchema({
            userId : user._id,
            token,
            expiresAt: Date.now() + 1000 * 60 * 15
        })

        await resetToken.save()

        const resetLink = `http://localhost:5001/reset-password/${token}`

        await sendResetEmail(email,resetLink)

        res.status(200).json({ message: "Reset link sent to your email." });

    } catch (error) {
        console.error("Forgot Password Error:", error.message);
        res.status(500).json({ message: "Something went wrong." });

    }
}

export const resetPassword = async (req,res) => {

    const { token } = req.params
    const { newPassword } = req.body

    try {

        const resetToken  = await PasswordTokenSchema.findOne({
            token,
            expiresAt: { $gt: Date.now() },
        })

        if (!resetToken) return res.status(400).json({ message: "Invalid or expired token." })

        const user = await User.findById(resetToken.userId)

        if (!user) return res.status(404).json({ message: "User not found." })

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(newPassword, salt);

        user.password = hashedPassword

        await user.save()

        await PasswordTokenSchema.deleteOne({ _id : resetToken._id })

        res.status(200).json({ message: "Password reset successfully." });

    } catch (error) {

        console.error("Reset Password Error:", error.message);
        res.status(500).json({ message: "Something went wrong." });

    }
}


export const checkAuth = async (req,res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log("Error in checkAuth",error.message)
        res.status(500).json({
            message:'Internal Server Error'
        })
    }
}