import { Express, Request, Response, NextFunction } from "express";

export default function routes(app: Express) {

  app.get("/elections", (req: Request, res: Response) => {
    fetch('https://')
    
  });

  app.get("/error", async (req: Request, res: Response) => {
    try {
      await throwsError();
      res.sendStatus(200);
    } catch (e) {
      res.status(400).send("Some bad error!");
    }
  });

  async function throwsError() {
    throw new Error("ERROR!!!!");
  }


  app.post("/api/data", (req: Request, res: Response) => {
    console.log(req.body);
    return res.sendStatus(200);
  });

  // all http methods: get, post, put, patch, delete
  app.all("/api/all", (req: Request, res: Response) => {
    return res.sendStatus(200);
  });
}
