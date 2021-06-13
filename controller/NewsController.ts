import IHandler from "../interface/IHandler";
import {Request, Response} from 'express';
import {URLS, TYPES} from "../utility/enums";
import FetchApi from "../utility/utility";

const GetNews : IHandler = async function(req : Request, res : Response) : Promise<void> {
    const {type, after, before} : IQuery = req.query;
    switch(type) {
        case TYPES.HOT:
            res.json(await FetchApi(URLS.NEWS_URL_HOT, {type, before, after}));
            break;
        case TYPES.NEW:
            res.json(await FetchApi(URLS.NEWS_URL_NEW, {type, before, after}));
            break;
        case TYPES.TOP:
            res.json(await FetchApi(URLS.NEWS_URL_TOP, {type, before, after}));
            break;
        case TYPES.HOT_WORLD:
            res.json(await FetchApi(URLS.NEWS_URL_WORLD_HOT, {type, before, after}));
            break;
        case TYPES.NEW_WORLD:
            res.json(await FetchApi(URLS.NEWS_URL_WORLD_NEW, {type, before, after}));
            break;
        case TYPES.TOP_WORLD:
            res.json(await FetchApi(URLS.NEWS_URL_WORLD_TOP, {type, before, after}));
            break;
        default:
            res.json({
                type : "Error",
                status : "400",
                details : "Invalid route"
            })
    }
    
};

export default GetNews;



