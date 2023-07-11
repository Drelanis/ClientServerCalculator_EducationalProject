import { historyField } from '../../classNames/classNamesOfElements';
import History from '../../elements/history/History';

historyField;

class ToggleHistory {
  static toggleHistory(): void {
    if (!document.querySelector(`.${historyField.root}`)) {
      new History();
      return;
    }
    History.removeHistoryField();
  }
}

export default ToggleHistory;
