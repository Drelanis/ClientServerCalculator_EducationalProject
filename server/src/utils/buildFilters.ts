const buildFilters = (
  expression: string | undefined,
  result: string | undefined
): Partial<any> => {
  const filters: Partial<any> = {};
  if (expression) filters.expression = expression;
  if (result) filters.result = result;
  return filters;
};

export default buildFilters;
