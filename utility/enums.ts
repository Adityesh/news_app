
enum URLS {
    NEWS_URL_HOT = 'https://reddit.com/r/news/hot.json',
    NEWS_URL_TOP = 'https://reddit.com/r/news/top.json',
    NEWS_URL_NEW = 'https://reddit.com/r/news/new.json',
    NEWS_URL_WORLD_TOP = 'https://reddit.com/r/worldnews/new.json',
    NEWS_URL_WORLD_HOT = 'https://reddit.com/r/worldnews/new.json',
    NEWS_URL_WORLD_NEW = 'https://reddit.com/r/worldnews/new.json',
}

enum TYPES {
    HOT = "hot",
    NEW = "new",
    TOP = "top",
    HOT_WORLD = "hot_world",
    NEW_WORLD = "new_world",
    TOP_WORLD = "top_world"
}

export {URLS, TYPES};