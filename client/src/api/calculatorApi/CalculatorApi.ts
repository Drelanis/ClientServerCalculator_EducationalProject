import { IHistoryItem } from '../../interfaces/calculatorInterfaces';
import CalculationResponse from '../../types/calculationRsponse';
import config from '../../types/config';
import BaseApi from '../baseApi/BaseApi';
import calculateRoutes from '../routes/routes';

interface IHistoryResponse {
  error: boolean;
  message: string;
  histories: IHistoryItem[];
  totalCount: number;
}

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

  public async getHistory(page?: number, limit?: number) {
    return await this.get<IHistoryResponse>(
      `${calculateRoutes.history}?page=${page}&limit=${limit}`
    );
  }

  public async removeHistoryItem(_id: number | string) {
    return await this.delete(`${calculateRoutes.history}/${_id}`);
  }
}

export default new CalculatorApi();
