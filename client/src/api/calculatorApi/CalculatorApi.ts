import CalculationResponse from '../../types/calculationRsponse';
import config from '../../types/config';
import BaseApi from '../baseApi/MainApi';
import calculateRoutes from '../routes/routes';

class CalculatorApi extends BaseApi {
  constructor() {
    super(calculateRoutes.main);
  }

  public async getCalculationResult(expression: string): Promise<CalculationResponse> {
    const response = await this.post(`${calculateRoutes.calculate}`, { expression });
    return response as Promise<CalculationResponse>;
  }

  public async getOperationsConfig(): Promise<config> {
    try {
      return await this.get<config>(`${calculateRoutes.config}`);
    } catch (error) {
      alert(new Error("Server don't working"));
    }
  }
}

export default new CalculatorApi();
