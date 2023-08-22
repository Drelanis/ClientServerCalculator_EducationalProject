const isObjectEmpty = (object = {}): boolean => {
  if (Object.keys(object).length) {
    return true;
  }
  return false;
};

export default isObjectEmpty;
