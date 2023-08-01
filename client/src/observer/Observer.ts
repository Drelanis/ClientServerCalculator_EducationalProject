import IModel from '../model/IModel';
import IObserver from './IObserver';

class Observer implements IObserver {
  private observers: Record<string, Function[]>;

  constructor() {
    this.observers = {};
  }

  public addSubscribe(observer: string, subscriber: Function): void {
    if (!this.observers[observer]) {
      this.observers[observer] = [];
    }
    this.observers[observer].push(subscriber);
  }

  public notifyObserver(context: IModel, observer: string): void {
    Object.values(this.observers[observer]).forEach((subscriber: Function) =>
      subscriber(context)
    );
  }
}

export default Observer;
