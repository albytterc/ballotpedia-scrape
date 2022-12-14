import express, {Request, Response, NextFunction, Express} from "express";
import helmet from "helmet";
import compression from 'compression';
import morgan from 'morgan';

import routes from "./routes";

const app: Express = express();


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

export default app;