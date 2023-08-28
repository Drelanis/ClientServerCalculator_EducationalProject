import IModel from 'model/IModel';

interface IController {
  model: IModel;
  calculate(context: IModel, expression: string): void;
}

export default IController;
