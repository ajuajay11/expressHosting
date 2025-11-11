const express = require('express');
const router = express.Router();
const Otp = require('../../models/otpSchema.js')
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/send-otp", async (req, res) => {
  console.log("hei bitch");
  
    try {
        const { email, category } = req.body;
        console.log(req.body);
        if (!email || !category) {
            return res.status(400).json({ message: "Email and category are required." });
        }
        const otp = Math.floor(1000 + Math.random() * 9000);
        const existingUser = await Otp.findOne({ email });

        if (existingUser) {
            res.status(500).json({ message: "already registered..." })

        } else {
            // Create a new OTP record
            await Otp.create({
                email,
                otp,
            });
            console.log(`Created new OTP for ${email}: ${otp}`);
        }
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: "Your OTP Code - Esports",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">ToBeHonest</h1>
          </div>
           
          <div style="background: #ffffff; padding: 40px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Your Verification Code</h2>
            <p style="color: #666; font-size: 16px; line-height: 1.5;">
              ${category === "register" ? "Welcome! Please verify your email address." : "You requested to reset your password."}
            </p>
            
            <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
              <div style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                Your OTP Code
              </div>
              <div style="font-size: 42px; font-weight: bold; color: #667eea; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                ${otp}
              </div>
            </div>
            
            <p style="color: #999; font-size: 14px; margin-bottom: 0;">
              This code will expire in <strong>10 minutes</strong>.
            </p>
            <p style="color: #999; font-size: 14px; margin-top: 5px;">
              If you didn't request this code, please ignore this email.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>© 2024 ToBeHonest. All rights reserved.</p>
          </div>
        </div>
      `,
            text: `Your OTP code is ${otp}. This code will expire in 10 minutes.`,
        });
        if (data) {
            console.log(data);

        }
        if (error) {
            console.error("Resend error:", error);
            return res.json(
                { message: "Failed to send OTP email", error },
                { status: 500 }
            );
        }
        res.status(200).json({ message: `otp send successfully... please check your ${email}` })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "otp send successfully..." })
    }
})

router.post("/verify-otp", async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
          return res.status(400).json({ message: "Email and otp are required." });
        }
        const findOtp = await Otp.findOne({email});
        if(!findOtp){
          res.status(404).json({message:"email not found"})
        }
        if(findOtp.otp !== otp) {
          return res.status(401).json({message:"helloooo, what u doing bloody hell"})
        };
        res.status(200).json({ message: `Email Verified Sucessfully` })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "otp send successfully..." })
    }
})

module.exports = router;