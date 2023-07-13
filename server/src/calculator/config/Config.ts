import dataSetting from './allowedButtons/allowedButtons.js';
import {
  extraConstance,
  extraOperationsBinary,
  extraOperationsUnary,
} from './extraOperations/extraOperations.js';
import { IConfig } from './interfaces/calculatorInterfaces.js';
import {
  rightMainOperations,
  topMainOperations,
} from './mainOperations/mainOperations.js';
import numbers from './numbers/numbers.js';
import config from './types/config.js';

class Config implements IConfig {
  private config: Partial<config> = {};

  constructor() {
    this.createConfig();
  }

  public get(): Partial<config> {
    return this.config;
  }

  private createConfig(): void {
    this.config.allowedButtons = dataSetting();
    this.config.extraConstance = extraConstance;
    this.config.extraOperationsBinary = extraOperationsBinary;
    this.config.extraOperationsUnary = extraOperationsUnary;
    this.config.topMainOperations = topMainOperations;
    this.config.rightMainOperations = rightMainOperations;
    this.config.numbers = numbers;
  }
}

export default new Config();
