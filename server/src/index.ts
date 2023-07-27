import express, { Express } from 'express';
import cors from 'cors';
import RouteCreator from './calculator/routes/routeCreator/RouteCreator.js';
import routers from './calculator/routes/createRoutes.js';

const app: Express = express();

const PORT: number = 4000;

app.use(express.json());
app.use(cors());
routers;
RouteCreator.getRoutes().forEach((route) => app.use(route));
app.listen(PORT);
