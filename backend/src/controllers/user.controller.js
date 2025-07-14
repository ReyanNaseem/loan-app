import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer'

const registerUser = async (req, res)=>{
    try {
      const { fullName, email, password, phone, dob, income, employment, address, imageUrl } = req.body;
      
      // check for email and password
      if (!fullName || !email || !password || !phone || !dob || !income || !employment || !address || !imageUrl) {
        return res.status(401).json({
          message: "Required field is missing",
        });
      }

      // check user exist or not
      const existUser = await User.findOne({ email });
      if (existUser) {
        return res.status(401).json({
          message: "Email already exist",
        });
      }

      const otp = Math.floor(Math.random() * 9000) + 1000;

      // hash password
      const hashPass = bcrypt.hashSync(password, 10);

      // sent the object in ths database
      const objToSend = {
        fullName,
        email,
        password: hashPass,
        phone,
        dob,
        income,
        employment,
        address,
        imageUrl,
        otp: otp
      };

      const user = await User.create(objToSend);

      let token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      const trasnporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "reyannaseem516@gmail.com",
          pass: "nodemailerpassreyan",
        },
      });

      const mailOption = {
        from: "reyannaseem516@gmail.com",
        to: email,
        subject: "Your OTP Code",
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333;">Welcome to Our Website</h2>
          <p>Hi there,</p>
          <p>Thank you for registering. Please use the following One-Time Password (OTP) to verify your email address:</p>
          <h3 style="color: #0056b3;">${otp}</h3>
          <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
          <br>
          <p>Regards,<br>Team</p>
        </div>
      `,
      };

      await trasnporter.sendMail(mailOption);

      // signup user
      return res.status(201).json({
        message: "User register successfully",
        user,
        token
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while register user",
        error: error.message,
      });
    }
}

const uploadUser = async (req, res)=>{

    try {
      return res.status(201).json({
        imageUrl: req.file.path,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Image not upload",
        error: error.message,
      });
    }
    
}

export {registerUser, uploadUser};