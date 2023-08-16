import AbstractDatabase, { IHistoryItem } from './AbstractDatabase.js';
import MongooseModel from './queryBuilderConfigs/mdb-mongooseFile.js';

class MongoDB extends AbstractDatabase {
  public async create(
    expression: string,
    result: number
  ): Promise<IHistoryItem> {
    const historyItem: IHistoryItem = await MongooseModel({
      calculation_date: new Date(),
      expression,
      result,
    }).save();
    return historyItem;
  }

  public async delete(id: string | number): Promise<void> {
    await MongooseModel.deleteOne({ _id: id });
  }

  public list(): Promise<[]> {
    return MongooseModel.find();
  }
}

export default MongoDB;
