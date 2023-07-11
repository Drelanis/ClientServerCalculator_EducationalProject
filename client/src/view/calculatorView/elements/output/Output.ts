import { outputClassNames } from '../../classNames/classNamesOfElements';
import { eventsType, tags } from '../../config/config';
import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';
import Config from '../../../config/calculatorConfig';
import { IOperations } from '../../../../interfaces/calculatorInterfaces';
import CopyEvent from '../../events/copyEvent/copyEvent';

class Output extends AbstractBaseElement {
  constructor() {
    super();
    this.render();
  }

  public render(): void {
    const root = document.querySelector(`.${outputClassNames.root}`);
    root.append(this.createOutputIcon(), this.createOutputResult());
  }

  private createOutputIcon(): HTMLElement {
    const element = this.createElement(tags.span, outputClassNames.equalIcon);
    const rightOperations = Config.getConfig().rightMainOperations as IOperations;
    element.textContent = rightOperations.equal.content;
    return element;
  }

  private createOutputResult(): HTMLElement {
    const container = this.createElement(tags.span, outputClassNames.resultField);
    this.addEventForElement(container, CopyEvent.setCopyFeatures, eventsType.click, [
      outputClassNames.resultField,
    ]);
    return container;
  }
}

export default Output;
