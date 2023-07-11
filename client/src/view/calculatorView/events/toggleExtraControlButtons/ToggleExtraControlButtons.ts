import IModel from '../../../../model/IModel';
import {
  calculatorControlButtons,
  extraControlButtons,
} from '../../classNames/classNamesOfElements';
import ControlButtons from '../../elements/controlButtons/ControlButtons';
import ExtraControlButtons from '../../elements/extraControlButtons/ExtraControlButtons';

class ToggleExtraControlButtons {
  static toggleControlButtons(model: IModel) {
    const numbers = document.querySelector(`.${calculatorControlButtons.mainButtons}`);
    const topOptions = document.querySelector(`.${calculatorControlButtons.topMainButtons}`);
    const rightOptions = document.querySelector(`.${calculatorControlButtons.rightMainButtons}`);
    if (numbers && topOptions && rightOptions) {
      numbers.remove();
      topOptions.remove();
      rightOptions.remove();
      new ExtraControlButtons();
      return;
    }
    const extraActionsButtons = document.querySelector(`.${extraControlButtons.root}`);
    extraActionsButtons.remove();
    new ControlButtons(model);
  }
}

export default ToggleExtraControlButtons;
