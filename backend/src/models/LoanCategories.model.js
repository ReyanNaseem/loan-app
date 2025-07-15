import mongoose, {Schema} from "mongoose";

const loanCategorySchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  }, // Cloudinary or uploaded image
});

export const LoanCategory = mongoose.model('LoanCategory', loanCategorySchema);