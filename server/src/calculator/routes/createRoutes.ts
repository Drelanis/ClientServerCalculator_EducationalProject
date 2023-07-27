import Calculate from '../controllers/Calculate/Calculate.js';
import {
  checkValidateExpression,
  mainValidateExpression,
} from '../service/calculator/errors/middlewares/mainValidateExpression.js';
import validateUnaryExpression from '../service/calculator/errors/middlewares/validateUnaryExpression.js';
import validateNumbers from '../service/calculator/errors/middlewares/validateNumbers.js';
import validateMainOperators from '../service/calculator/errors/middlewares/validateMainOperators.js';
import RouteCreator from './routeCreator/RouteCreator.js';
import ConfigController from '../controllers/Config/ConfigController.js';
import routes from './config/routes.js';
import methods from './config/methods.js';
import HistoryController from '../controllers/History/HistoryController.js';

const routers = {
  config: {
    GET: RouteCreator.create(
      `${routes.config}`,
      `${methods.get}`,
      ConfigController.get
    ),
  },
  calculate: {
    POST: RouteCreator.create(
      `${routes.calculate}`,
      `${methods.post}`,
      mainValidateExpression as any,
      checkValidateExpression,
      validateUnaryExpression,
      validateNumbers,
      validateMainOperators,
      Calculate.calculateExression
    ),
  },
  history: {
    GET: RouteCreator.create(
      routes.history,
      methods.get,
      HistoryController.get
    ),
  },
};

export default routers;
