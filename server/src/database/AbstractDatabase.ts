export interface IHistoryItem {
  calculation_date: Date;
  expression: string;
  result: number;
}

abstract class AbstractDatabase {
  abstract create(expression: string, result: number): Promise<IHistoryItem>;
  abstract delete(id: string | number): Promise<void>;
  abstract list(): Promise<[]>;
}

export default AbstractDatabase;
