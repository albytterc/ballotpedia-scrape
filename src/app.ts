import express, { NextFunction, Request, Response } from "express";
import config from 'config'
import helmet from "helmet";
import routes from "./routes";

const api = process.env.API_URL;
const app = express();

app.use(helmet());
app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Application listening on http://localhost:3000");
});
