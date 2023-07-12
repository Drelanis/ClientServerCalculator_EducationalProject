import CalculatorApi from '../../api/calculatorApi/CalculatorApi';
import config from '../../types/config';

class Config {
  private config: Partial<config> = {};

  public async createConfig(): Promise<void> {
    const response = await CalculatorApi.getOperationsConfig();
    this.config = { ...response };
  }

  public getConfig(): Partial<config> {
    return this.config;
  }
}

export default new Config();
