import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  cell: String,
  name: {
    first: String,
    last: String,
  },
  email: String,
  picture: {
    large: String,
    medium: String,
    thumbnail: String,
  }
});


export const Employee = mongoose.model('Employee', EmployeeSchema);
