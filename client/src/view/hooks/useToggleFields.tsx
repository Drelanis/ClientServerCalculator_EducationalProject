import { useState } from 'react';

const useToggleFields = () => {
  const [isExtraOperation, setExtraOperation] = useState(false);
  const [isHistory, setHistory] = useState(false);

  return { isExtraOperation, setExtraOperation, isHistory, setHistory };
};

export default useToggleFields;
