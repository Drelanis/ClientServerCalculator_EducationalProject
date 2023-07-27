import { useState } from 'react';

const useFetching = (callback: Function) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (error: any) {
      setIsError('Server crashed =(');
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, isError];
};

export default useFetching;
