import { IHistoryItem } from '../../interfaces/calculatorInterfaces';
import CalculationResponse from '../../types/calculationRsponse';
import config from '../../types/config';
import MainApi from '../baseApi/MainApi';
import calculateRoutes from '../routes/routes';

interface IHistoryResponse {
  histories: IHistoryItem[];
  totalCount: number;
}

class CalculatorApi extends MainApi {
  constructor() {
    super(calculateRoutes.main);
  }

  public async getCalculationResult(
    expression: string
  ): Promise<CalculationResponse> {
    const response = await this.post(`${calculateRoutes.calculate}`, {
      expression,
    });
    return response as Promise<CalculationResponse>;
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
    await this.delete(`${calculateRoutes.history}/${_id}`);
  }
}

export default new CalculatorApi();
