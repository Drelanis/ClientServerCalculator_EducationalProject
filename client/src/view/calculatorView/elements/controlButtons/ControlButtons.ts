import IModel from '../../../../model/IModel';
import { calculatorControlButtons, extraClassNames } from '../../classNames/classNamesOfElements';
import customEventsClassNames from '../../classNames/customEventsClassNames';
import mainClassNames from '../../classNames/mainClassNames';
import { atributesNames, atributesValues, eventsType, tags } from '../../config/config';
import CustomEvents from '../../events/customEvent/CustomEvent';
import InputEvents from '../../events/inputEvent/InputEvent';
import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';
import Config from '../../../config/calculatorConfig';

class ControlButtons extends AbstractBaseElement {
  constructor(public model: IModel) {
    super();
    this.render();
  }

  public render(): void {
    const root = document.querySelector(`.${calculatorControlButtons.root}`);
    root.append(
      this.createTopMainButtons(),
      this.createMainButtons(),
      this.createRightMainButtons(),
    );
    new CustomEvents(this.model);
  }

  private createMainButtons(): HTMLElement {
    const container: HTMLElement = this.createElement(
      `${tags.div}`,
      `${calculatorControlButtons.mainButtons}`,
    );
    this.buttonCreater(container, Config.getConfig().numbers, [
      mainClassNames.number,
      mainClassNames.mainButtons,
    ]);
    InputEvents.setEvents(container);
    return container;
  }

  private createTopMainButtons(): HTMLElement {
    const container: HTMLElement = this.createElement(
      `${tags.div}`,
      `${calculatorControlButtons.topMainButtons}`,
    );
    this.buttonCreater(container, Config.getConfig().topMainOperations, [
      mainClassNames.mainButtons,
      mainClassNames.operation,
    ]);
    container.classList.add(calculatorControlButtons.operationsBackground);
    container
      .querySelector(`.${customEventsClassNames.allCLean}`)
      .classList.add(`${mainClassNames.customEvent}`);
    InputEvents.setEvents(container);
    container
      .querySelector(`.${customEventsClassNames.allCLean}`)
      .addEventListener(eventsType.click, () => CustomEvents.allClean());
    return container;
  }

  private createRightMainButtons(): HTMLElement {
    const container: HTMLElement = this.createElement(
      `${tags.div}`,
      `${calculatorControlButtons.rightMainButtons}`,
    );
    this.buttonCreater(container, Config.getConfig().rightMainOperations, [
      mainClassNames.mainButtons,
      mainClassNames.operation,
    ]);
    container.classList.add(calculatorControlButtons.operationsBackground);
    container
      .querySelector(`.${customEventsClassNames.equal}`)
      .classList.add(`${mainClassNames.customEvent}`);
    InputEvents.setEvents(container);
    container
      .querySelector(`.${extraClassNames.equalButton}`)
      .setAttribute(atributesNames.id, atributesValues.equal);
    return container;
  }
}

export default ControlButtons;
