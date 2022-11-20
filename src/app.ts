import express, { NextFunction, Request, Response } from "express";
import config from "config";
import helmet from "helmet";
import compression from 'compression';
import morgan from 'morgan';

import routes from "./routes";

const api = process.env.API_URL;
const app = express();


app.use(compression())
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

routes(app)

app.use((req, res, next) => {
    const error = new Error("Not found");
    next(error);
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(3000, () => {
    console.log("Application listening on http://localhost:3000");
});
