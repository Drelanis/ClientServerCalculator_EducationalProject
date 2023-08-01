import isObjectEmpty from '../../utils/isObjectEmpty.js';
import dataSetting from './allowedButtons/allowedButtons.js';
import {
  extraConstance,
  extraOperationsBinary,
  extraOperationsUnary,
} from './extraOperations/extraOperations.js';
import { IConfig } from './interfaces/calculatorInterfaces.js';
import {
  allClean,
  equal,
  rightMainOperations,
  topMainOperations,
} from './mainOperations/mainOperations.js';
import numbers from './numbers/numbers.js';
import ConfigType from './types/config.js';

class Config implements IConfig {
  private config: Partial<ConfigType> = {};

  constructor() {
    this.createConfig();
  }

  public get(): Partial<ConfigType> {
    return this.config;
  }

  private isExtraOperations() {
    if (
      isObjectEmpty(this.config.extraConstance) ||
      isObjectEmpty(this.config.extraOperationsBinary) ||
      isObjectEmpty(this.config.extraOperationsUnary)
    ) {
      return true;
    }
  }

  private createConfig(): void {
    this.config.allowedButtons = dataSetting();
    this.config.extraConstance = extraConstance;
    this.config.extraOperationsBinary = extraOperationsBinary;
    this.config.extraOperationsUnary = extraOperationsUnary;
    this.config.isExtraOperations = this.isExtraOperations();
    this.config.topMainOperations = topMainOperations;
    this.config.allClean = allClean;
    this.config.rightMainOperations = rightMainOperations;
    this.config.equal = equal;
    this.config.numbers = numbers;
  }
}

export default new Config();
