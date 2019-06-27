import { model, Schema, Model, Document } from 'mongoose';
import { seed } from '../../seedData'; // taken from https://randomuser.me/api/?results=10&seed=abc&nat=us

const EmployeeSchema = new Schema({
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

export const EmployeeModel:Model<Document> = model('Employee', EmployeeSchema);

/* ******** SEED DB ******** */
export const seedDB = async (shouldForce?:boolean) => {
  try {
    const employees = await EmployeeModel.find();
    if (!employees.length || shouldForce) await EmployeeModel.insertMany(seed.results);
  } catch (err) {
    console.log('error seeding db!');
  }
}
