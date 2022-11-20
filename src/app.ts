import express, { NextFunction, Request, Response, Error } from "express";
import config from "config";
import helmet from "helmet";
import routes from "./routes";

const api = process.env.API_URL;
const app = express();

app.use(helmet());
app.use(express.json());

routes(app);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status(404)
    next(error);
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(3000, () => {
    console.log("Application listening on http://localhost:3000");
});
