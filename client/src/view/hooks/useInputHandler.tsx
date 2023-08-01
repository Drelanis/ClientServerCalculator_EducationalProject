const useInputHandler = (
  inputRef: React.RefObject<HTMLTextAreaElement | null>
) => {
  const enterButtonValue = (buttonValue: string = ''): void => {
    const inputField = inputRef.current as HTMLTextAreaElement;
    const cursorPosition: number =
      inputField.selectionStart as unknown as number;
    if (buttonValue) {
      const currentValue: string = inputField.value;
      const newValue =
        currentValue.slice(0, cursorPosition) +
        buttonValue +
        currentValue.slice(cursorPosition);
      inputField.focus();
      inputField.value = newValue;
      if (inputRef.current) {
        inputRef.current.value = newValue;
      }
      inputField.setSelectionRange(
        cursorPosition + buttonValue.length,
        cursorPosition + buttonValue.length
      );
      return;
    }
  };

  return {
    enterButtonValue,
  };
};

export default useInputHandler;
