import express, { Express } from 'express';
import cors from 'cors';
import calculateRoutes from './calculator/routes/calculate.js';
import configRoutes from './calculator/routes/config.js';

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(calculateRoutes);
app.use(configRoutes);

const PORT: number = 4000;

app.listen(PORT);
