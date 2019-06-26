"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var employees_1 = require("./routes/employees");
var PORT = 3033;
var app = express_1.default();
app.use(employees_1.router);
app.get('/', function (req, res) {
    res.send('server is live');
});
app.listen(PORT, function () {
    console.log("listening on port " + PORT + "!");
});
