"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var NewsController_1 = __importDefault(require("../controller/NewsController"));
var app = express_1.Router();
app.get('/test', function (req, res) {
    res.send("Hello World from /news/test route");
});
app.get('/all', NewsController_1.default);
app.get('/world', NewsController_1.default);
exports.default = app;
