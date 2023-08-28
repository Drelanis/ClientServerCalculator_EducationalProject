import CalculatorApi from 'api/calculatorApi/CalculatorApi';
import ConfigType from 'types/config';

class Config {
  private config: Partial<ConfigType> = {};

  public async createConfig(): Promise<void> {
    const response = await CalculatorApi.getOperationsConfig();
    this.config = { ...response };
  }

  public getConfig(): Partial<ConfigType> {
    return this.config;
  }
}

export default new Config();
