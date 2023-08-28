import CalculateController from '../controllers/Calculate/Calculate';
import {
  checkValidateExpression,
  mainValidateExpression,
} from '../service/calculator/errors/middlewares/mainValidateExpression';
import validateUnaryExpression from '../service/calculator/errors/middlewares/validateUnaryExpression';
import validateNumbers from '../service/calculator/errors/middlewares/validateNumbers';
import validateMainOperators from '../service/calculator/errors/middlewares/validateMainOperators';
import ConfigController from '../controllers/Config/ConfigController';
import HistoryController from '../controllers/History/HistoryController';
import { IRouters } from '@calculatorConfig/interfaces/calculatorInterfaces';
import validatePage from '../service/history/errors/middlewares/validatePage';
import validateLimit from '../service/history/errors/middlewares/validateLimit';
import validateSort from '../service/history/errors/middlewares/validateSort';
import validateResult from '../service/history/errors/middlewares/validateResult';
import validateExpression from '../service/history/errors/middlewares/validateExpression';

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
    middlewares: [
      validatePage,
      validateLimit,
      validateSort,
      validateResult,
      validateExpression,
    ],
    action: HistoryController.list,
  },
  {
    method: 'DELETE',
    path: '/history/:id',
    middlewares: [],
    action: HistoryController.delete,
  },
];

export default routers;
