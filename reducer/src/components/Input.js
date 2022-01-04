const Input = ({
  id,
  type,
  label,
  onBlur,
  onChange,
  value,
  hasError,
  errorMessage,
}) => {
  const inputClasses = hasError ? "form-control invalid" : "form-control";

  return (
    <div className={inputClasses}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {hasError && <p className="error-text">{errorMessage}</p>}
    </div>
  );
};

export default Input;
