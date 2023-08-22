import isObjectEmpty from '../../utils/isObjectEmpty';
import dataSetting from './allowedButtons/allowedButtons';
import {
  extraConstance,
  extraOperationsBinary,
  extraOperationsUnary,
} from './extraOperations/extraOperations';
import { IConfig } from './interfaces/calculatorInterfaces';
import {
  allClean,
  equal,
  rightMainOperations,
  topMainOperations,
} from './mainOperations/mainOperations';
import numbers from './numbers/numbers';
import ConfigType from './types/config';

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
