"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var news_1 = __importDefault(require("./routes/news"));
dotenv_1.default.config();
var ENVIRONMENT = process.env.ENVIRONMENT;
var PORT = process.env.PORT;
var app = express_1.default();
app.use(express_1.default.json());
app.use('/news', news_1.default);
app.listen(3000, function () { return console.log("Listening on port " + PORT); });
