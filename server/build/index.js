"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = require("./database/database");
var EmployeeModel_1 = require("./database/models/EmployeeModel");
/* ******** CONTROLLERS ******** */
var employeeController_1 = require("./database/controllers/employeeController");
/* ******** SERVER CONFIG ******** */
var PORT = 3033; // not using process.env for ease of running demo
var app = express_1.default();
/* ******** CONNECT DB ******** */
database_1.db.on('error', console.error.bind(console, 'connection error:'));
database_1.db.once('open', function () { return console.log('db is connected....'); });
/* ********** ROUTES *********** */
app.use('/employees', employeeController_1.EmployeeController);
/* ******** SEED DB ******** */
EmployeeModel_1.seedDB(); // for demo/testing/dev purposes
/* ******** SERVER INIT ******** */
app.listen(PORT, function () { return console.log("listening on port " + PORT + "!"); });
