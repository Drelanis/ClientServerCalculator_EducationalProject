import IModel from 'model/IModel';

interface IObserver {
  addSubscribe(observer: string, subscribe: Function): void;
  notifyObserver(context: IModel, observer: string): void;
}

export default IObserver;
