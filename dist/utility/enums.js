"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = exports.URLS = void 0;
var URLS;
(function (URLS) {
    URLS["NEWS_URL_HOT"] = "https://reddit.com/r/news/hot.json";
    URLS["NEWS_URL_TOP"] = "https://reddit.com/r/news/top.json";
    URLS["NEWS_URL_NEW"] = "https://reddit.com/r/news/new.json";
    URLS["NEWS_URL_WORLD_TOP"] = "https://reddit.com/r/worldnews/new.json";
    URLS["NEWS_URL_WORLD_HOT"] = "https://reddit.com/r/worldnews/new.json";
    URLS["NEWS_URL_WORLD_NEW"] = "https://reddit.com/r/worldnews/new.json";
})(URLS || (URLS = {}));
exports.URLS = URLS;
var TYPES;
(function (TYPES) {
    TYPES["HOT"] = "hot";
    TYPES["NEW"] = "new";
    TYPES["TOP"] = "top";
    TYPES["HOT_WORLD"] = "hot_world";
    TYPES["NEW_WORLD"] = "new_world";
    TYPES["TOP_WORLD"] = "top_world";
})(TYPES || (TYPES = {}));
exports.TYPES = TYPES;
