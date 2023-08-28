import { useState } from 'react';

const useFetching = (
  callback: Function
): [() => Promise<void>, boolean, string] => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetching = async (data?: any) => {
    try {
      setLoading(true);
      await callback(data);
    } catch (error: any) {
      setIsError('Server crashed =(');
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, isError];
};

export default useFetching;
