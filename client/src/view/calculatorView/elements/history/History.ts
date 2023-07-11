import { calculator, historyField } from '../../classNames/classNamesOfElements';
import { tags } from '../../config/config';
import AbstractBaseElement from '../../elements/abstractBaseElement/AbstractBaseElement';

class History extends AbstractBaseElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const root = document.querySelector(`.${calculator.root}`);
    root.append(this.createHistoryField());
  }

  createHistoryField(): HTMLElement {
    const element = this.createElement(tags.div, historyField.root);
    return element;
  }

  static removeHistoryField(): void {
    document.querySelector(`.${historyField.root}`).remove();
  }
}

export default History;
