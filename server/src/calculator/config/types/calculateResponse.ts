interface ICalculateResponse {
  validate: boolean;
  errorMessage: string;
  result: string;
}

type calculateResponse = (
  validate: boolean,
  errorMessage: string,
  result: string
) => ICalculateResponse;

export default calculateResponse;
