import {Express, Request, Response, NextFunction} from "express";
import parseHTML from "./ballotpedia-scrape";
import routeCache from './routeCache';

import findCandidateID from "./vote-smart-scrape";

export default function routes(app: Express) {
    app.get("/", (req: Request, res: Response) => {
        res.send("VoteVault " + (new Date).toLocaleString());
    });


    app.get("/api/candidate/:query", routeCache(10000000), async (req: Request, res: Response, next: NextFunction) => {
        try {
            const profileJson = await parseHTML(req.params.query, req.query, true);
            return res.status(200).json(profileJson)
        } catch (error) {
            next(error);
        }
    });

    
    app.get("/api/info/:query", routeCache(10000000), async (req: Request, res: Response, next: NextFunction) => {
        try {
            const articleJson = await parseHTML(req.params.query, req.query, false);
            return res.status(200).json(articleJson)
        } catch (error) {
            next(error);
        }
    });


    app.get("/votesmart-api/:candidate", routeCache(10000000), async (req: Request, res: Response, next: NextFunction) => {
        try {
            const nameJson = await findCandidateID(req.params.candidate);
            return res.status(200).json(nameJson);
        } catch (error) {
            next(error);
        }
    });
}
