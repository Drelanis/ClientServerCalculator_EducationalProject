import express, { Express } from 'express';
import cors from 'cors';
import RouteCreator from './calculator/routes/RouteCreator.js';

const app: Express = express();

const PORT: number = 4000;

app.use(express.json());
app.use(cors());
RouteCreator.getRoutes().forEach((route) => app.use(route));
app.listen(PORT);
