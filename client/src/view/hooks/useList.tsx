import { toast } from 'react-toastify';
import {
  IErrorResponse,
  IListAPI,
  IListItem,
} from 'interfaces/calculatorInterfaces';
import usePagination from './usePagination';

const useList = <T extends IListItem>(service: IListAPI, limit: number = 5) => {
  const {
    data,
    isLoading,
    error,
    page,
    totalPages,
    setData,
    setPage,
    setTotalCount,
    lastElementRef,
  } = usePagination<T>(service, limit);

  const removeItem = async (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    listItem: T
  ) => {
    event.stopPropagation();
    const response = (await service.remove(listItem._id)) as IErrorResponse;
    if (response.isError) return toast.error(response.errorMessage);
    setData((prevData) => prevData.filter((item) => item._id !== listItem._id));
    setTotalCount((prevTotalCount) => prevTotalCount - 1);
    if (page >= totalPages) {
      setPage(totalPages);
    }
  };

  return {
    data,
    isLoading,
    error,
    removeItem,
    lastElementRef,
  };
};

export default useList;
