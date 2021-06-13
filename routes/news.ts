import { Router, Request, Response } from "express";
import GetNews from "../controller/NewsController";

const app = Router();

app.get('/test', (req : Request, res : Response) => {
    res.send("Hello World from /news/test route")
});

app.get('/all', GetNews);
app.get('/world', GetNews);

export default app;
