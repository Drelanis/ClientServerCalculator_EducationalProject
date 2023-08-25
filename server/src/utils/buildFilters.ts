import { IFilters } from './interfaces';

const buildFilters = (
  expression: string | undefined,
  result: string | undefined
): IFilters => {
  return {
    ...(expression ? { expression } : {}),
    ...(result ? { result } : {}),
  };
};

export default buildFilters;
