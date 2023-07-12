import express, { Router } from 'express';
import Calculate from '../controllers/Calculate/Calculate.js';

const calculateRoutes: Router = express.Router();
const LINK_PATH = '/calculate';

calculateRoutes.post(LINK_PATH, Calculate.calculateExression);

export default calculateRoutes;
