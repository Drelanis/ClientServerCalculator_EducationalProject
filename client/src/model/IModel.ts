import IObserver from '../observer/IObserver';

interface IModel extends IObserver {
  setExpression(updatedExpression: string): void;
  setResult(updatedResult: number): void;
  setError(error: string): void;
  getExpression(): string;
  getResult(): number;
  getErrorMessage(): string | undefined;
  clearErrorField(): void;
}

export default IModel;
