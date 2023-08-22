import AbstractDatabase, { IHistoryItem } from '../AbstractDatabase';
import MongooseModel from './config/model';

class MongoDB extends AbstractDatabase<IHistoryItem> {
  public async create(
    expression: string,
    result: number
  ): Promise<IHistoryItem> {
    const historyItem: IHistoryItem = await new MongooseModel({
      calculation_date: new Date(),
      expression,
      result,
    }).save();
    return historyItem;
  }

  public async delete(id: string): Promise<void> {
    await MongooseModel.deleteOne({ _id: id });
  }

  public list(sort?: string, filters?: any): Promise<IHistoryItem[]> {
    let query = MongooseModel.find(filters);
    if (sort === 'desc') query = query.sort({ calculation_date: -1 });
    return query.exec();
  }
}

export default MongoDB;
