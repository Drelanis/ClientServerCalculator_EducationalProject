import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import useFetching from './useFetching';
import useObserver from './useObserver';
import { getPageCount } from 'utils/pages';

interface IListItem {
  _id: string;
}

const usePagination = <T extends IListItem>(
  fetchData: (page: number, limit: number) => Promise<any>,
  limit: number = 5
) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<T[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const totalPages = getPageCount(totalCount, limit);

  const [fetchPage, isLoading, error] = useFetching(async () => {
    const response = await fetchData(page, limit);
    if (response.isError) {
      toast.error(response.errorMessage);
      return { data: [], totalCount: 0 };
    }
    setData(() => [...data, ...response.data]);
    setTotalCount(response.totalCount);
    return { data: response.data, totalCount: response.totalCount };
  });

  useEffect(() => {
    fetchPage();
  }, [page]);

  useObserver(lastElementRef, page < totalPages, isLoading, () =>
    setPage(page + 1)
  );

  const removeItem = (itemId: string) => {
    setData((prevData) => prevData.filter((item) => item._id !== itemId));
    setTotalCount(totalCount - 1);
    if (page >= totalPages) {
      setPage(totalPages);
    }
  };

  return { data, isLoading, error, removeItem, lastElementRef };
};

export default usePagination;
