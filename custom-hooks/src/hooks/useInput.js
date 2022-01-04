import { useState } from "react";

const useInput = ({ initValue = null, validateValue = () => true }) => {
  const [value, setValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;

  const onChange = (event) => {
    setValue(event.target.value);
    debugger;
  };
  const onBlur = () => setIsTouched(true);

  const reset = () => {
    setValue(initValue);
    setIsTouched(false);
  };

  return {
    value,
    isTouched,
    valueIsValid,
    hasError,
    onChange,
    onBlur,
    reset,
  };
};

export default useInput;
