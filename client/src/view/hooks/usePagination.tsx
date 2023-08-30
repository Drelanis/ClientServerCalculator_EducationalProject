import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import useFetching from './useFetching';
import useObserver from './useObserver';
import { getPageCount } from 'utils/pages';
import { IListAPI, IListItem } from 'interfaces/calculatorInterfaces';

const usePagination = <T extends IListItem>(
  service: IListAPI,
  limit: number = 5
) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<T[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const totalPages = useMemo(
    () => getPageCount(totalCount, limit),
    [totalCount, limit]
  );

  const [fetchPage, isLoading, error] = useFetching(async () => {
    const response = await service.list(page, limit);
    if (response.isError) {
      toast.error(response.errorMessage);
      return response;
    }
    setData((prevData) => [...prevData, ...response.data]);
    setTotalCount(response.totalCount);
    return response;
  });

  useEffect(() => {
    fetchPage();
  }, [page]);

  useObserver(lastElementRef, page < totalPages, isLoading, () =>
    setPage((prevPage) => prevPage + 1)
  );

  return {
    data,
    isLoading,
    error,
    page,
    totalPages,
    setData,
    setPage,
    setTotalCount,
    lastElementRef,
  };
};

export default usePagination;
