"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../utility/enums");
var utility_1 = __importDefault(require("../utility/utility"));
var GetNews = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, type, after, before, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return __generator(this, function (_q) {
            switch (_q.label) {
                case 0:
                    _a = req.query, type = _a.type, after = _a.after, before = _a.before;
                    _b = type;
                    switch (_b) {
                        case enums_1.TYPES.HOT: return [3 /*break*/, 1];
                        case enums_1.TYPES.NEW: return [3 /*break*/, 3];
                        case enums_1.TYPES.TOP: return [3 /*break*/, 5];
                        case enums_1.TYPES.HOT_WORLD: return [3 /*break*/, 7];
                        case enums_1.TYPES.NEW_WORLD: return [3 /*break*/, 9];
                        case enums_1.TYPES.TOP_WORLD: return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 13];
                case 1:
                    _d = (_c = res).json;
                    return [4 /*yield*/, utility_1.default(enums_1.URLS.NEWS_URL_HOT, { type: type, before: before, after: after })];
                case 2:
                    _d.apply(_c, [_q.sent()]);
                    return [3 /*break*/, 14];
                case 3:
                    _f = (_e = res).json;
                    return [4 /*yield*/, utility_1.default(enums_1.URLS.NEWS_URL_NEW, { type: type, before: before, after: after })];
                case 4:
                    _f.apply(_e, [_q.sent()]);
                    return [3 /*break*/, 14];
                case 5:
                    _h = (_g = res).json;
                    return [4 /*yield*/, utility_1.default(enums_1.URLS.NEWS_URL_TOP, { type: type, before: before, after: after })];
                case 6:
                    _h.apply(_g, [_q.sent()]);
                    return [3 /*break*/, 14];
                case 7:
                    _k = (_j = res).json;
                    return [4 /*yield*/, utility_1.default(enums_1.URLS.NEWS_URL_WORLD_HOT, { type: type, before: before, after: after })];
                case 8:
                    _k.apply(_j, [_q.sent()]);
                    return [3 /*break*/, 14];
                case 9:
                    _m = (_l = res).json;
                    return [4 /*yield*/, utility_1.default(enums_1.URLS.NEWS_URL_WORLD_NEW, { type: type, before: before, after: after })];
                case 10:
                    _m.apply(_l, [_q.sent()]);
                    return [3 /*break*/, 14];
                case 11:
                    _p = (_o = res).json;
                    return [4 /*yield*/, utility_1.default(enums_1.URLS.NEWS_URL_WORLD_TOP, { type: type, before: before, after: after })];
                case 12:
                    _p.apply(_o, [_q.sent()]);
                    return [3 /*break*/, 14];
                case 13:
                    res.json({
                        type: "Error",
                        status: "400",
                        details: "Invalid route"
                    });
                    _q.label = 14;
                case 14: return [2 /*return*/];
            }
        });
    });
};
exports.default = GetNews;
