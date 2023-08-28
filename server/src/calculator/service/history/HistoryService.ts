import { consts } from '../../../utils/consts';
import buildFilters from '../../../utils/buildFilters';
import Database from '../../../utils/DatabaseFactory';
import { IHistoryItem, IListResponse } from '../../../utils/interfaces';
import calculateIndexes from '../../../utils/calculateIndexes';

class HistoryService {
  async list(
    page: string,
    limit: string,
    sort = consts.ascending,
    expression: string,
    result: string
  ): Promise<IListResponse> {
    try {
      const filters = buildFilters(expression, result);
      const { startIndex, endIndex } = calculateIndexes(page, limit);
      const { data, totalCount } = (await Database.list(
        sort,
        filters,
        startIndex,
        endIndex
      )) as IListResponse;
      return { data, totalCount };
    } catch (error) {
      throw new Error('An error occurred while getting the list of stories');
    }
  }

  async create(expression: string, result: number): Promise<IHistoryItem> {
    try {
      const historyItem = await Database.create(expression, result);
      return historyItem;
    } catch (error) {
      throw new Error('Failed to create history item');
    }
  }

  async delete(id: string) {
    try {
      await Database.delete(id);
    } catch (error) {
      throw new Error('An error occurred while deleting the element of story');
    }
  }
}

export default new HistoryService();
