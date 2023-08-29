import CalculationResponse from 'types/calculationRsponse';
import config from 'types/config';
import BaseApi from '../baseApi/BaseApi';
import calculateRoutes from '../routes/routes';

class CalculatorApi extends BaseApi {
  constructor() {
    super(calculateRoutes.main);
  }

  public async getCalculationResult(
    expression: string
  ): Promise<CalculationResponse> {
    return await this.post(`${calculateRoutes.calculate}`, {
      expression,
    });
  }

  public async getOperationsConfig() {
    return await this.get<config>(`${calculateRoutes.config}`);
  }
}

export default new CalculatorApi();
