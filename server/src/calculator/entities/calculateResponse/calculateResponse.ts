import calculateResponse from '../../config/types/calculateResponse.js';

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
