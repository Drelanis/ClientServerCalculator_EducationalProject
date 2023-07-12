import IModel from '../model/IModel';
import { methods, routes } from '../routes/routes';
import IController from './IController';

class Controller implements IController {
  constructor(public model: IModel) {
    this.model.addSubscribe('newMathExpression', this.calculate);
  }
  public async calculate(context: IModel): Promise<void> {
    if (!context.getExpression()) {
      context.setResult(0);
      return;
    }
    try {
      const response = await fetch(`${routes.main}${routes.calculate}`, {
        method: `${methods.post}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: context.getExpression() }),
      });
      const data = await response.json();
      if (!data.validate) {
        context.setResult(data.result);
        throw new Error(data.errorMessage);
      }
      context.setResult(data.result);
    } catch (error) {
      context.setError(error);
    }
  }
}

export default Controller;
