import mongoose from "mongoose"

export const CONNECTDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongo DB connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log("Error while connecting the mongodb",err)
    }
}