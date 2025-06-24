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

export const login =(req,res)=>{
    res.send("login")
}

export const logout =(req,res)=>{
    res.send("logout")
}