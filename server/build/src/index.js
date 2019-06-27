"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var body_parser_1 = __importDefault(require("body-parser"));
var database_1 = require("./database/database");
/* ******** SERVER CONFIG ******** */
var PORT = 3033; // not using process.env for ease of running the app.
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(routes_1.router);
/* ******** CONNECT DB ******** */
database_1.db.on('error', console.error.bind(console, 'connection error:'));
database_1.db.once('open', function () { return console.log('db is connected....'); });
/* ******** CONTROLLERS ******** */
var employeeController_1 = require("./database/controllers/employeeController");
/* ********** ROUTES *********** */
app.use('/employees', employeeController_1.EmployeeController);
/* ******** SERVER INIT ******** */
app.listen(PORT, function () { return console.log("listening on port " + PORT + "!"); });
