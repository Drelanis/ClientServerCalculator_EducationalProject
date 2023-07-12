import express, { Express } from 'express';
import cors from 'cors';
import routerOfCalculate from './calculator/routes/calculate.js';
import routerOfConfig from './calculator/routes/config.js';

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(routerOfCalculate);
app.use(routerOfConfig);

const PORT: number = 4000;

app.listen(PORT);
