import express from "express"
import { forgetPassword, login, logout, signup } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.post('/forgot-password',forgetPassword)

export default router

