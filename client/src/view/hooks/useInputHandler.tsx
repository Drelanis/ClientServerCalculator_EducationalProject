type InputRef = React.MutableRefObject<HTMLTextAreaElement | null>;

const setInputFieldValue = (
  inputField: HTMLTextAreaElement,
  cursorPosition: number,
  buttonValue: string
) => {
  const currentValue: string = inputField.value;
  const newValue =
    currentValue.slice(0, cursorPosition) +
    buttonValue +
    currentValue.slice(cursorPosition);
  inputField.focus();
  inputField.value = newValue;
  inputField.setSelectionRange(
    cursorPosition + buttonValue.length,
    cursorPosition + buttonValue.length
  );
};

const useInputHandler = (inputRef: InputRef) => {
  const enterButtonValue = (buttonValue: string = ''): void => {
    const inputField = inputRef.current as HTMLTextAreaElement;
    const cursorPosition: number = inputField.selectionStart;
    if (buttonValue) {
      setInputFieldValue(inputField, cursorPosition, buttonValue);
    }
  };

  return {
    enterButtonValue,
  };
};

export default useInputHandler;
