import { useReducer } from "react";

const defaultState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") return { ...state, value: action.value };
  if (action.type === "BLUR") return { ...state, isTouched: action.value };

  return state;
};

const useInput = ({ initValue = "", validateValue = () => true }) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    ...defaultState,
    value: initValue,
  });

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const onChange = (event) =>
    dispatch({ type: "INPUT", value: event.target.value });

  const onBlur = () => dispatch({ type: "BLUR", value: true });

  const reset = () => {
    dispatch({ type: "INPUT", value: initValue });
    dispatch({ type: "BLUR", value: false });
  };

  return {
    value: inputState.value,
    isTouched: inputState.isTouched,
    valueIsValid,
    hasError,
    onChange,
    onBlur,
    reset,
  };
};

export default useInput;
