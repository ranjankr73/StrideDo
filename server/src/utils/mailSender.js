import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

const sendVerificationEmail = async (email, token) => {
    try {
        const verificationUrl = `http://localhost:5173/verify-email?token=${token}`;

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: "Email Verification",
            html: `<h3>Please verify your email</h3>
                    <p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`,
        };

        const info = transporter.sendMail(mailOptions);

        return info;
    } catch (error) {
        console.log("Issue in sending verification mail", error);
    }
};

const sendResetPasswordEmail = async (email, token) => {
    try {
        const resetUrl = `http://localhost:5173/reset-password?token=${token}`;

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: "Password Reset",
            html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
        };

        const info = await transporter.sendMail(mailOptions);

        return info;
    } catch (error) {
        console.log("Issue in sending password reset mail", error);
    }
};

export { sendVerificationEmail, sendResetPasswordEmail };
