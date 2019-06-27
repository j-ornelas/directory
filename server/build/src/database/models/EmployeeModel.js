"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var seedData_1 = require("../../../seedData"); // taken from https://randomuser.me/api/?results=10&seed=abc&nat=us
var EmployeeSchema = new mongoose_1.Schema({
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
exports.EmployeeModel = mongoose_1.model('Employee', EmployeeSchema);
/* ******** SEED DB ******** */
var seedDB = function () {
    console.log('seed info', seedData_1.seed);
};
seedDB();
