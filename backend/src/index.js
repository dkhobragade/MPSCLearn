import express from 'express'
import dotenv from "dotenv"
import authRoutes from '../src/routes/auth.routes.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})