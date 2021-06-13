interface Data {
    count? : number,
    after? : string,
    before? : string,
    results : DataItem[]
}

interface DataItem {
    title : string,
    subreddit : string,
    author : string,
    upvotes : number,
    comments : number,
    reddit_link : string,
    news_link : string,
    domain : string,
    thumbnail? : string
}


export {Data, DataItem};