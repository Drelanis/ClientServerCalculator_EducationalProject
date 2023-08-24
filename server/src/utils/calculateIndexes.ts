const calculateIndexes = (
  page: string,
  limit: string
): { startIndex: number; endIndex: number } => {
  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = Number(page) * Number(limit) - startIndex;
  return { startIndex, endIndex };
};

export default calculateIndexes;
