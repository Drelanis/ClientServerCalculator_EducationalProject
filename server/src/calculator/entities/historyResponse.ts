import historyResponse from '@calculatorConfig/types/historyResponse';

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
