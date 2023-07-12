import CalculatorApi from '../api/calculatorApi/CalculatorApi';
import IModel from '../model/IModel';
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
      const data = await CalculatorApi.getCalculationResult(context.getExpression());
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
