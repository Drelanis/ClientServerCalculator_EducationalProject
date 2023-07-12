import { IOperations } from '../../../../interfaces/calculatorInterfaces';
import { tags } from '../../config/config';

abstract class AbstractBaseElement {
  public abstract render(className?: string): void;

  protected addEventForElement<T>(
    element: HTMLElement,
    action: Function,
    actionType: string,
    ...args: T[]
  ) {
    return element.addEventListener(`${actionType}`, () => action(...args));
  }

  protected createElement(
    tag: string,
    className: string,
    attribut?: string,
    valueAttribut?: string,
  ): HTMLElement {
    const element: HTMLElement = document.createElement(`${tag}`);
    if (className) element.classList.add(`${className}`);
    if (attribut) element.setAttribute(`${attribut}`, `${valueAttribut}`);
    return element;
  }

  protected buttonCreater = (
    container: HTMLElement,
    config: IOperations | string[],
    classNames: string[],
  ): HTMLElement => {
    Object.entries(config).forEach(element => {
      const [name, info] = element;
      const newElement = this.createElement(`${tags.button}`, `${name}-${tags.button}`);
      newElement.textContent = info.content;
      newElement.classList.add(...classNames);
      container.append(newElement);
    });
    return container;
  };
}

export default AbstractBaseElement;
