interface ICalculateResponse {
  isError: boolean;
  errorMessage: string;
  result: string;
}

type calculateResponse = (
  isError: boolean,
  errorMessage: string,
  result: string
) => ICalculateResponse;

export default calculateResponse;
