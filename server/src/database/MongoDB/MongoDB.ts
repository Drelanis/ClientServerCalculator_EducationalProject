import { IFilters, IHistoryItem, IListResponse } from '@utils/interfaces';
import { consts } from '@utils/consts';
import AbstractDatabase from '../AbstractDatabase';
import MongooseModel from './config/model';

class MongoDB extends AbstractDatabase<IHistoryItem> {
  public async create(
    expression: string,
    result: number
  ): Promise<IHistoryItem> {
    const historyItem: IHistoryItem = await new MongooseModel({
      expression,
      result,
    }).save();
    return historyItem;
  }

  public async delete(id: string): Promise<void> {
    await MongooseModel.deleteOne({ _id: id });
  }

  public async list(
    sort: string,
    filters?: IFilters,
    startIndex?: number,
    endIndex?: number
  ): Promise<IListResponse> {
    let query = MongooseModel.find(filters!);
    if (sort === consts.ascending) query = query.sort({ created_date: 1 });
    if (startIndex !== undefined && endIndex !== undefined) {
      query = query.skip(startIndex).limit(endIndex);
    }
    const totalCount = await MongooseModel.countDocuments(filters).exec();
    const data: IHistoryItem[] = await query.exec();
    return { data, totalCount };
  }
}

export default MongoDB;
