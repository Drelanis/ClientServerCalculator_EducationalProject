import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';
import { tags } from '../../config/config';
import {
  calculator,
  inputClassNames,
  optionsClassNames,
  outputClassNames,
  calculatorControlButtons,
} from '../../classNames/classNamesOfElements';
import Options from '../options/Options';
import Input from '../input/Input';
import Output from '../output/Output';
import ControlButtons from '../controlButtons/ControlButtons';
import IModel from '../../../../model/IModel';
import ErrorField from '../errorField/ErrorField';
import Config from '../../../config/calculatorConfig';
import Spinner from '../spinner/Spinner';
import mainClassNames from '../../classNames/mainClassNames';

class CalculatorBody extends AbstractBaseElement {
  constructor(public model: IModel) {
    super();
    this.model.addSubscribe('renderError', ErrorField.renderErrorField);
    this.render();
  }

  public async render(): Promise<void> {
    const root: HTMLElement = document.querySelector(`.${mainClassNames.mainContent}`);
    root.append(this.createBody());
    Spinner.render(`${calculatorControlButtons.root}`);
    await Config.createConfig();
    if (!Object.keys(Config.getConfig()).length) return;
    Spinner.remove();
    new Options(this.model);
    new Input();
    new Output();
    new ControlButtons(this.model);
  }

  private createBody(): HTMLElement {
    const bodyRoot: HTMLElement = this.createElement(tags.div, calculator.root);
    const containerForOptions: HTMLElement = this.createElement(tags.div, optionsClassNames.root);
    const containerInputField: HTMLElement = this.createElement(tags.div, inputClassNames.root);
    const containerOutputField: HTMLElement = this.createElement(tags.div, outputClassNames.root);
    const containerControllButtons: HTMLElement = this.createElement(
      tags.div,
      calculatorControlButtons.root,
    );
    bodyRoot.append(
      containerForOptions,
      containerInputField,
      containerOutputField,
      containerControllButtons,
    );
    return bodyRoot;
  }
}

export default CalculatorBody;
