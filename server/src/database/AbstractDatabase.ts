import { IFilters, IListResponse } from '../utils/interfaces';

abstract class AbstractDatabase<T> {
  abstract create(expression: string, result: number): Promise<T>;
  abstract delete(id: string): Promise<void>;
  abstract list(
    sort?: string,
    filters?: IFilters,
    startIndex?: number,
    endIndex?: number
  ): Promise<IListResponse>;
}

export default AbstractDatabase;
