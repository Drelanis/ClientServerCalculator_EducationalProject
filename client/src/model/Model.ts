import errorObject from '../types/errorObject';
import Observer from '../observer/Observer';
import IModel from './IModel';

export class Model extends Observer implements IModel {
  private expression: string = '';
  private result: number = 0;
  private error: Partial<errorObject> = {};

  constructor() {
    super();
  }

  setExpression(updatedExpression: string): void {
    this.expression = updatedExpression;
    this.notifyObserver(this, 'newMathExpression');
  }

  setResult(updatedResult: number): void {
    this.result = updatedResult;
    this.notifyObserver(this, 'newMathResult');
  }

  setError(error: string) {
    this.error.message = error;
    this.notifyObserver(this, 'renderError');
  }

  getExpression(): string {
    return this.expression;
  }

  getResult(): number {
    return this.result;
  }

  getErrorMessage(): string {
    return this.error.message;
  }
}

export default Model;
