import { useState, useEffect } from 'react';
import Model from 'model/Model';

const useErrorHandler = () => {
  const [error, setError] = useState<string>('');

  useEffect(() => {
    Model.addSubscribe('renderError', showError);
  }, []);

  const showError = () => {
    const errorMessage = Model.getErrorMessage();
    setError(errorMessage as string);
  };

  const removeError = () => {
    setError('');
  };

  return { error, removeError };
};

export default useErrorHandler;
