import CalculatorApi from '../api/calculatorApi/CalculatorApi';
import IModel from '../model/IModel';
import IController from './IController';

class Controller implements IController {
  constructor(public model: IModel) {
    this.model.addSubscribe('newMathExpression', this.calculate);
  }

  public async calculate(context: IModel): Promise<void> {
    try {
      const data = await CalculatorApi.getCalculationResult(
        context.getExpression()
      );
      if (!data.isError) {
        context.setResult(data.result);
        throw new Error(data.errorMessage);
      }
      context.setResult(data.result);
    } catch (error) {
      context.setError(error as string);
    }
  }
}

export default Controller;
