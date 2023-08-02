import { FC, CSSProperties, useEffect, useState } from 'react';
import { spinnerClassNames } from '../classNames/classNamesOfElements';

interface LoaderProps {
  style?: CSSProperties;
}

const Loader: FC<LoaderProps> = ({ style }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(true);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return showLoader ? (
    <span className={spinnerClassNames.root} style={{ ...style }}></span>
  ) : null;
};

export const smallLoader = {
  height: '20px',
  width: '20px',
  borderWidth: '5px',
};

export default Loader;
