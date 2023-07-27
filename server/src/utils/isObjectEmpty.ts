const isObjectEmpty = (object = {}): boolean => {
  if (Object.keys(object).length) {
    return true;
  }
};

export default isObjectEmpty;
