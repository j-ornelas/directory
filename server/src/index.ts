import express from 'express';
import { db } from './database/database';
import { seedDB } from './database/models/EmployeeModel';
/* ******** CONTROLLERS ******** */
import { EmployeeController } from './database/controllers/employeeController';
/* ******** SERVER CONFIG ******** */
const PORT = 3033; // not using process.env for ease of running demo
const app = express();
/* ******** CONNECT DB ******** */
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('db is connected....'));
/* ********** ROUTES *********** */
app.use('/employees', EmployeeController);
/* ******** SEED DB ******** */
seedDB(); // for demo/testing/dev purposes
/* ******** SERVER INIT ******** */
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
