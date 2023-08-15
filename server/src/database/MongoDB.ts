import AbstractDatabase from './AbstractDatabase.js';
import MongooseModel from './queryBuilderConfigs/mdb-mongooseFile.js';

class MongoDB extends AbstractDatabase {
  public async create(expression: string, result: number): Promise<void> {
    await MongooseModel({
      calculation_date: new Date(),
      expression,
      result,
    }).save();
  }

  public async delete(id: string | number): Promise<void> {
    await MongooseModel.deleteOne({ _id: id });
  }

  public list(): Promise<[]> {
    return MongooseModel.find();
  }
}

export default MongoDB;
