import historyResponse from '../config/types/historyResponse';

const getHistoryResponse: historyResponse = (
  isError,
  errorMessage,
  data,
  totalCount
) => {
  return {
    isError,
    errorMessage,
    data,
    totalCount,
  };
};

export default getHistoryResponse;
