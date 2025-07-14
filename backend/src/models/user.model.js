import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({

    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    dob:{
        type: String,
        required: true,
    },
    income:{
        type: Number,
        required: true
    },
    employment:{
        type: String,
        required: true,
        enum: ['employed','self-employed','unemployed', 'student', 'retired']
    },
    address:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
    },
    otp:{
        type: String,
    },
    isActive:{
        type: Boolean,
        default:  false
    } 

},{timestamps:true});


export const User = mongoose.model('User', userSchema);