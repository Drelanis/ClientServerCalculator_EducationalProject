import BaseApi from 'api/baseApi/BaseApi';
import calculateRoutes from 'api/routes/routes';
import { IHistoryResponse, IListAPI } from 'interfaces/calculatorInterfaces';

class HistoryAPI extends BaseApi implements IListAPI {
  constructor() {
    super(calculateRoutes.main);
  }

  public async list(page?: number, limit?: number) {
    return await this.get<IHistoryResponse>(
      `${calculateRoutes.history}?page=${page}&limit=${limit}`
    );
  }

  public async remove(_id: string) {
    return await this.delete(`${calculateRoutes.history}/${_id}`);
  }
}

export default new HistoryAPI();
