import { spinnerClassNames } from '../../classNames/classNamesOfElements';
import { tags } from '../../config/config';
import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';

class Spinner extends AbstractBaseElement {
  public render(className: string): void {
    document.querySelector(`.${className}`).append(this.createSpinner());
  }

  private createSpinner(): HTMLElement {
    const spinnerElement: HTMLSpanElement = document.createElement(`${tags.span}`);
    spinnerElement.classList.add(`${spinnerClassNames.root}`);
    return spinnerElement;
  }

  remove(): void {
    document.querySelector('.spinner').remove();
  }
}

export default new Spinner();
