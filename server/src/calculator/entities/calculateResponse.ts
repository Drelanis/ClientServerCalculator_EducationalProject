import calculateResponse from '@calculatorConfig/types/calculateResponse';

const getCalculateResponse: calculateResponse = (
  isError,
  errorMessage,
  result
) => {
  return {
    isError,
    errorMessage,
    result,
  };
};

export default getCalculateResponse;
