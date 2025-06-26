import express from 'express'
import dotenv from "dotenv"
import authRoutes from '../src/routes/auth.routes.js'
import { CONNECTDB } from './lib/db.js'
import cors from 'cors'

const app = express()
dotenv.config()

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

const PORT = process.env.PORT

app.use(express.json())
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
    CONNECTDB()
})