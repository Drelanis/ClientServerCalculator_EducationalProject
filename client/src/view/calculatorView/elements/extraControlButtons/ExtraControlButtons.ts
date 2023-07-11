import {
  calculatorControlButtons,
  extraControlButtons,
} from '../../classNames/classNamesOfElements';
import mainClassNames from '../../classNames/mainClassNames';
import { tags } from '../../config/config';
import InputEvents from '../../events/inputEvent/InputEvent';
import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';
import Config from '../../../config/calculatorConfig';

class ExtraControlButtons extends AbstractBaseElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const root = document.querySelector(`.${calculatorControlButtons.root}`);
    root.append(this.createExtraActions());
  }

  createExtraActions(): HTMLElement {
    const container: HTMLElement = this.createElement(`${tags.div}`, `${extraControlButtons.root}`);
    const extraOperations = {
      ...Config.getConfig().extraOperationsUnary,
      ...Config.getConfig().extraOperationsBinary,
      ...Config.getConfig().extraConstance,
    };
    Object.entries(extraOperations).forEach(element => {
      const newElement = this.createElement(`${tags.button}`, `${element[0]}-${tags.button}`);
      newElement.textContent = element[1].content;
      newElement.classList.add(`${mainClassNames.number}`);
      newElement.classList.add(`${mainClassNames.mainButtons}`);
      container.append(newElement);
    });
    InputEvents.setEvents(container);
    return container;
  }
}

export default ExtraControlButtons;
