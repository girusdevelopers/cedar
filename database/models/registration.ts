import mongoose from 'mongoose';
import next from '../fallback';

// Define a schema for the data
const constructionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  property: {
    type: String,
  },

  bhk: {
    type: String,
  },
});

// Create a model based on the schema
// const userRegister = mongoose.model('userRegister', constructionSchema);
const UserRegister = next.model('Register', constructionSchema);
export default UserRegister;
