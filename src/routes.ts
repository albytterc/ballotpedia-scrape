import { profile } from "console";
import { Express, Request, Response, NextFunction } from "express";
import parseHTML from "./ballotpedia-scrape";

export default function routes(app: Express) {

  app.get("/api/:query", async (req: Request, res: Response, next: NextFunction) => {
      try {
        const profileJson = await parseHTML(req.params.query);
        return res.status(200).json(profileJson)
      } catch (error) {
        next(error);
      }
    
  });

  // app.get("/error", async (req: Request, res: Response) => {
  //   try {
  //     await throwsError();
  //     res.sendStatus(200);
  //   } catch (e) {
  //     res.status(400).send("Some bad error!");
  //   }
  // });

  // async function throwsError() {
  //   throw new Error("ERROR!!!!");
  // }


  // app.post("/api/data", (req: Request, res: Response) => {
  //   console.log(req.body);
  //   return res.sendStatus(200);
  // });

  // // all http methods: get, post, put, patch, delete
  // app.all("/api/all", (req: Request, res: Response) => {
  //   return res.sendStatus(200);
  // });
}
