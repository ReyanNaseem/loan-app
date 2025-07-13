import { Router } from "express";
import { uploadUser, registerUser } from "../controllers/user.controller.js";
import multer from "multer";
import { storage } from '../utils/cloudinary.js';

const router = Router();

router.route("/register").post(registerUser)

const upload = multer({storage})
router.route("/upload").post( upload.single('image'), uploadUser)

export default router;