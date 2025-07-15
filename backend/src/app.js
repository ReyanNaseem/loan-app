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

export {app};