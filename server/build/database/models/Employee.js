"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var EmployeeSchema = new mongoose_1.default.Schema({
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
exports.Employee = mongoose_1.default.model('Employee', EmployeeSchema);
