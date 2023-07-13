import calculateResponse from '../../config/types/calculateResponse.js';

const getCalculateResponse: calculateResponse = (
  validate,
  errorMessage,
  result
) => {
  return {
    validate,
    errorMessage,
    result,
  };
};

export default getCalculateResponse;
