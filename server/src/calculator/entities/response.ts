import { Response } from 'express';
import {
  IFailResponseParams,
  ISuccessResponseParams,
} from '@calculator/config/interfaces/calculatorInterfaces';

export const successResponse = <T>({
  response,
  message,
  data,
  status = 200,
  totalCount,
}: ISuccessResponseParams<T>): Response<any, Record<string, any>> => {
  return response.status(status).json({
    isError: false,
    message,
    data,
    totalCount,
  });
};

export const failResponse = ({
  response,
  errorMessage,
  status = 400,
}: IFailResponseParams): Response<any, Record<string, any>> => {
  return response.status(status).json({
    isError: true,
    errorMessage,
  });
};
