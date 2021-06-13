import IRequest from '../interface/IRequest';
import {Data, DataItem} from '../models/Data';
import fetch from 'node-fetch';

const FetchApi : IRequest = async function(url : string, query : IQuery) : Promise<any> {
    const {after} = query;
    try {
        const urlModified : string = url + "?after=" + after;
        const response = await fetch(urlModified, {method : "GET"});
        const data = await response.json();
        const result : Data = {
            count : 25,
            after : data.data.after,
            before : data.data.before,
            results : Mapper(data.data.children)
        };

        return result;
    } catch(_e) {
        console.log(_e);
        let e : Error = _e;
        return GenerateError();
    }
}

function Mapper(array : Array<any>) : DataItem[] {
    let result : DataItem[] = array.map(item => {
        
        return {
            title : item.data.title,
            subreddit : item.data.subreddit,
            upvotes : item.data.ups,
            domain : item.data.domain,
            thumbnail : item.data.thumbnail,
            reddit_link : "https://reddit.com" + item.data.permalink,
            news_link : item.data.url || item.data.url_overridden_by_dest,
            comments : item.data.num_comments,
            author : item.data.author
        };
    });

    return result;
};


function GenerateError() : IError {
    return {
        type : "Error",
        details : "Error fetching the data, Try Again",
        status : 400
    }
}






export default FetchApi;


