import express, { Router } from 'express';
import Calculate from '../controllers/Calculate/Calculate.js';

const routerOfCalculate: Router = express.Router();
const LINK_PATH = '/calculate';

routerOfCalculate.post(LINK_PATH, Calculate.calculateExression);

export default routerOfCalculate;
