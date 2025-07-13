import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res)=>{
    try {
      const { fullName, email, password, phone, dob, income, employment, address } = req.body;
      console.log(req.body);
      // res.status(200).json({
      //   user: req.body
      // })
      
      // check for email and password
      if (!fullName || !email || !password || !phone || !dob || !income || !employment || !address) {
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
        address
      };

      // signup user
      const user = await User.create(objToSend);
      return res.status(201).json({
        message: "User register successfully",
        user,
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