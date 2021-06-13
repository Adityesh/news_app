import {Request, Response} from 'express';

interface IHandler {
    (req : Request, res : Response) : void
}


export default IHandler;