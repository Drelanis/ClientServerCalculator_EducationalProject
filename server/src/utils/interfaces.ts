export interface IHistoryItem {
  expression: string;
  result: number;
}

export interface IFilters {
  expression?: string;
  result?: string;
  sort?: 'desc' | 'asc';
}

export interface IListResponse {
  data: IHistoryItem[];
  totalCount: number;
}
