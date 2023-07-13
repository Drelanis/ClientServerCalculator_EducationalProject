import express, { Router } from 'express';
import Calculate from '../controllers/Calculate/Calculate.js';
import {
  checkValidateExpression,
  mainValidateExpression,
} from '../service/calculator/errors/middlewares/mainValidateExpression.js';
import validateUnaryExpression from '../service/calculator/errors/middlewares/validateUnaryExpression.js';
import validateNumbers from '../service/calculator/errors/middlewares/validateNumbers.js';
import validateMainOperators from '../service/calculator/errors/middlewares/validateMainOperators.js';

const calculateRoutes: Router = express.Router();
const LINK_PATH = '/calculate';

calculateRoutes.post(
  LINK_PATH,
  mainValidateExpression,
  checkValidateExpression,
  validateUnaryExpression,
  validateNumbers,
  validateMainOperators,
  Calculate.calculateExression
);

export default calculateRoutes;
