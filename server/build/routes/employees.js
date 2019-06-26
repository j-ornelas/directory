"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var node_fetch_1 = __importDefault(require("node-fetch"));
var router = express_1.Router();
exports.router = router;
router.get('/employees', function (req, res) {
    var numOfResults = req.body.numOfResults;
    node_fetch_1.default("https://randomuser.me/api/?results=" + (numOfResults || 10))
        .then(function (info) { return info.json(); })
        .then(function (data) { return res.send({ employees: data.results }); })
        .catch(function (err) { return res.send({ employees: [], error: err.toString() }); });
});
