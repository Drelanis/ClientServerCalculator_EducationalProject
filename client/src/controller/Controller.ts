import IModel from '../model/IModel';
import IController from './IController';

class Controller implements IController {
  constructor(public model: IModel) {
    this.model.addSubscribe('newMathExpression', this.calculate);
  }

  public async calculate(context: IModel) {
    try {
      const response = await fetch('http://localhost:4000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: context.getExpression() }),
      });
      const data = await response.json();
      if (data.error) {
        context.setResult(data.result);
        throw new Error(data.error);
      }
      context.setResult(data.result);
    } catch (error) {
      context.setError(error);
    }
  }
}

export default Controller;
