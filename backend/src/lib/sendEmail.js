import nodemailer from "nodemailer"

export const sendResetEmail = async (email,resetLink) => {

    const transporter  = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.GMAIL,
            pass:process.env.GAMIL_PASS
        }
    })

    const mailOptions = {
        from:"dikshantv1137@gmail.com",
        to:email,
        subject:"Password Reset Link",
        html: `
        <p>You requested to reset your password.</p>
        <p><a href="${resetLink}">Click here to reset your password</a></p>
        <p>This link will expire in 15 minutes.</p>
      `
    }

    await transporter.sendMail(mailOptions)
}