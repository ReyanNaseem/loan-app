import express from 'express';
import cors from 'cors';

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// routes import
// import multer from 'multer';
import router from './routes/user.route.js';

app.use("/api/v1/users", router)


// app.post('/upload', upload.single('image'), (req,res)=> {
//   try {

//     return res.status(201).json({
//       imageUrl: req.file.path
//     })
    
//   } catch (error) {
//     return res.status(500).json({
//       message: "Image not upload",
//       error: error.message
//     })
//   }
// })

export {app};