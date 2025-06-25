import { generateJWTToken } from "../lib/utils.js"
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

    const { email , password }= req.body

    try {

        const user = await User.findOne({email})

       if (!user) {
            return res.status(404).json({ message: "No account found associated with this email." });
        }

        if (!password) {
            return res.status(400).json({ message: "Please enter the new password." });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters." });
        }

        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password,salt)

        await User.findByIdAndUpdate(user._id, {
            password: hashpassword,
        });

        res.status(200).json({ message: "Password updated successfully" })


    } catch (error) {
        console.log("Error while resetting the password",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }

}