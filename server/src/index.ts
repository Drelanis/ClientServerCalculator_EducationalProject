import express, { Express } from 'express';
import cors from 'cors';
import RouteCreator from './calculator/routes/RouteCreator';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

const PORT: string = process.env.EXPRESS_PORT as string;

app.use(express.json());
app.use(cors());
RouteCreator.getRoutes().forEach((route) => app.use(route));
app.listen(PORT);
