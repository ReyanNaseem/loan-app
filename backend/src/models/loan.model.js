import mongoose, {Schema} from "mongoose";

const loanSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "personal",
      "business",
      "home",
      "education",
      "other",
    ],
  },
},{timestamps:true});

export const Loan = mongoose.model('Loan', loanSchema);