import { IHistoryItem } from '../../../utils/interfaces';

interface IHistoryResponse {
  isError: boolean;
  errorMessage: string;
  data?: IHistoryItem[];
  totalCount?: number;
}

type historyResponse = (
  isError: boolean,
  errorMessage: string,
  data?: IHistoryItem[],
  totalCount?: number
) => IHistoryResponse;

export default historyResponse;
