import { Response } from 'express';
import {
  IFailResponseParams,
  ISuccessResponseParams,
} from '@calculator/config/interfaces/calculatorInterfaces';

export const successResponse = <T>({
  response,
  status = 200,
  ...parametrs
}: ISuccessResponseParams<T>): Response<any, Record<string, any>> => {
  return response.status(status).json({
    isError: false,
    ...parametrs,
  });
};

export const failResponse = ({
  response,
  errorMessage,
  status = 400,
  ...parametrs
}: IFailResponseParams): Response<any, Record<string, any>> => {
  return response.status(status).json({
    isError: true,
    errorMessage,
    ...parametrs,
  });
};
