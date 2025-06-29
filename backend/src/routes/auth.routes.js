import express from "express"
import { forgetPassword, login, logout, resetPassword, signup } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.post('/forgot-password',forgetPassword)

router.post("/reset-password/:token", resetPassword);

export default router

