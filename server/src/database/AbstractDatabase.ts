export interface IHistoryItem {
  calculation_date: Date;
  expression: string;
  result: number;
}

abstract class AbstractDatabase<T> {
  abstract create(expression: string, result: number): Promise<T>;
  abstract delete(id: string): Promise<void>;
  abstract list(sort?: string, filters?: any): Promise<T[]>;
}

export default AbstractDatabase;
