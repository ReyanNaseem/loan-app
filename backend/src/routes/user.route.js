import { Router } from "express";
import { uploadUser, registerUser, verifyUser, loginUser } from "../controllers/user.controller.js";
import multer from "multer";
import { storage } from '../utils/cloudinary.js';

const router = Router();

router.route("/register").post(registerUser);
router.route("/verify").post(verifyUser);
router.route("/login").post(loginUser);

const upload = multer({storage});
router.route("/upload").post( upload.single('image'), uploadUser);

export default router;