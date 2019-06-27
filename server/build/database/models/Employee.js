"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
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
