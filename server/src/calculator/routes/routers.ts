import CalculateController from '../controllers/Calculate/Calculate.js';
import {
  checkValidateExpression,
  mainValidateExpression,
} from '../service/calculator/errors/middlewares/mainValidateExpression.js';
import validateUnaryExpression from '../service/calculator/errors/middlewares/validateUnaryExpression.js';
import validateNumbers from '../service/calculator/errors/middlewares/validateNumbers.js';
import validateMainOperators from '../service/calculator/errors/middlewares/validateMainOperators.js';
import ConfigController from '../controllers/Config/ConfigController.js';
import HistoryController from '../controllers/History/HistoryController.js';
import { IRouters } from '../config/interfaces/calculatorInterfaces.js';

const routers: IRouters[] = [
  {
    method: 'GET',
    path: '/config',
    middlewares: [],
    action: ConfigController.get,
  },
  {
    method: 'POST',
    path: '/calculate',
    middlewares: [
      mainValidateExpression as any,
      checkValidateExpression,
      validateUnaryExpression,
      validateNumbers,
      validateMainOperators,
    ],
    action: CalculateController.calculateExression,
  },
  {
    method: 'GET',
    path: '/history',
    middlewares: [],
    action: HistoryController.get,
  },
];

export default routers;
