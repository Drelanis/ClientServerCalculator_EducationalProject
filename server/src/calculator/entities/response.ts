import { Response } from 'express';
import {
  IFailResponseParams,
  ISuccessResponseParams,
} from '@calculator/config/interfaces/calculatorInterfaces';

export const successResponse = <T>({
  response,
  status = 200,
  ...parameters
}: ISuccessResponseParams<T>): Response<any, Record<string, any>> => {
  return response.status(status).json({
    isError: false,
    ...parameters,
  });
};

export const failResponse = ({
  response,
  errorMessage,
  status = 400,
  ...parameters
}: IFailResponseParams): Response<any, Record<string, any>> => {
  return response.status(status).json({
    isError: true,
    errorMessage,
    ...parameters,
  });
};
