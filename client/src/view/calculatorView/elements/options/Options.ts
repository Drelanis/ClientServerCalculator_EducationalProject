import IModel from '../../../../model/IModel';
import { historyField, optionsClassNames } from '../../classNames/classNamesOfElements';
import { tags, atributesNames, atributesValues, eventsType } from '../../config/config';
import ToggleExtraControlButtons from '../../events/toggleExtraControlButtons/ToggleExtraControlButtons';
import ToggleHistory from '../../events/toggleHistory/ToggleHistory';
import ToggleTheme from '../../events/toggleTheme/ToggleTheme';
import iconsClassNames from '../../public/icons';
import AbstractBaseElement from '../abstractBaseElement/AbstractBaseElement';
import Config from '../../../config/calculatorConfig';

class Options extends AbstractBaseElement {
  constructor(public model: IModel) {
    super();
    this.render();
  }

  public render(): void {
    const optionsRoot = document.querySelector(`.${optionsClassNames.root}`);
    if (
      Object.keys(
        Config.getConfig().extraConstance ||
          Config.getConfig().extraOperationsBinary ||
          Config.getConfig().extraOperationsUnary,
      ).length
    ) {
      optionsRoot.append(this.createEngineerIcon());
    }
    optionsRoot.append(this.createToggleThemeElement(), this.createHistoryIcon());
  }

  private createEngineerIcon(): HTMLElement {
    const container: HTMLElement = this.createElement(
      tags.div,
      optionsClassNames.containerForEngineer,
    );
    const engineerIcon: HTMLElement = this.createElement(tags.i, iconsClassNames.mainClassName);
    engineerIcon.classList.add(iconsClassNames.engineerCalculatorIcon);
    this.addEventForElement(
      engineerIcon,
      ToggleExtraControlButtons.toggleControlButtons,
      eventsType.click,
      this.model,
    );
    container.append(engineerIcon);
    return container;
  }

  private createToggleThemeElement(): HTMLElement {
    const container: HTMLElement = this.createElement(
      tags.label,
      optionsClassNames.containerForToggleTheme,
    );
    const inputElement: HTMLElement = this.createElement(
      tags.input,
      optionsClassNames.classNameForToogleInput,
      atributesNames.type,
      atributesValues.checkbox,
    );
    const themeSliderContainer: HTMLElement = this.createElement(
      tags.span,
      optionsClassNames.classNameForToogleSpan,
    );
    const lightThemeIcon = this.createElement(tags.i, iconsClassNames.mainClassName);
    const darkThemeIcon = this.createElement(tags.i, iconsClassNames.mainClassName);
    lightThemeIcon.classList.add(iconsClassNames.lightThemeIcon);
    darkThemeIcon.classList.add(iconsClassNames.darkThemeIcon);
    themeSliderContainer.append(lightThemeIcon, darkThemeIcon);
    container.append(inputElement, themeSliderContainer);
    this.addEventForElement(container, ToggleTheme.themeToggle, eventsType.change);
    if (document.querySelector(`.${optionsClassNames.containerForEngineer}`)) {
      container.style.marginLeft = '0px';
    }
    return container;
  }

  private createHistoryIcon(): HTMLElement {
    const container: HTMLElement = this.createElement(tags.div, historyField.historyIcon);
    const historyIcon: HTMLElement = this.createElement(tags.i, iconsClassNames.mainClassName);
    this.addEventForElement(historyIcon, ToggleHistory.toggleHistory, eventsType.click);
    historyIcon.classList.add(iconsClassNames.historyIcon);
    container.append(historyIcon);
    return container;
  }
}

export default Options;
