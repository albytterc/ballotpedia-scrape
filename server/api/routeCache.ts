import * as nodecache from 'node-cache';
import NodeCache from "node-cache";
import {NextFunction, Request, Response} from "express";


const cache = new NodeCache();

// interface MyResponse extends Response {
//     originalSend: any;
// }

export default (duration: number) => (req: Request, res: Response, next: NextFunction) => {
    if (req.method !== 'GET') {
        console.error('Cannot cache non-GET methods');
        return next();
    }

    const key = req.originalUrl;
    const cachedResponse = cache.get(key);
    if (cachedResponse) {
        console.log("Cache hit for " + key);
        res.send(cachedResponse);
    } else {
        console.log('Cache miss for ' + key);
        // @ts-ignore
        res.originalSend = res.send;
        // @ts-ignore
        res.send = body => {
            // @ts-ignore
            res.originalSend(body);
            cache.set(key, body, duration);
        };
        next();
    }
};