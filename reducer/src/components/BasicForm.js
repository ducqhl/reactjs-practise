import useInput from "../hooks/useInput";
import Input from "./Input";

const BasicForm = (props) => {
  const firstNameInput = useInput({
    validateValue: (value) => value.trim() !== "",
  });
  const lastNameInput = useInput({
    validateValue: (value) => value.trim() !== "",
  });
  const emailInput = useInput({
    validateValue: (value) => value.trim() !== "" && value.includes("@"),
  });

  const formIsValid =
    firstNameInput.valueIsValid &&
    lastNameInput.valueIsValid &&
    emailInput.valueIsValid;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(
      `Submit ${firstNameInput.value} - ${lastNameInput.value} - ${emailInput.value}`,
    );

    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="control-group">
        <Input
          id="firstName"
          type="text"
          label="First Name"
          onBlur={firstNameInput.onBlur}
          onChange={firstNameInput.onChange}
          value={firstNameInput.value}
          hasError={firstNameInput.hasError}
          errorMessage="First Name must not empty"
        />
        <Input
          id="lastName"
          type="text"
          label="Last Name"
          onBlur={lastNameInput.onBlur}
          onChange={lastNameInput.onChange}
          value={lastNameInput.value}
          hasError={lastNameInput.hasError}
          errorMessage="Last Name must not empty"
        />
      </div>
      <Input
        id="email"
        type="email"
        label="E-Mail Address"
        onBlur={emailInput.onBlur}
        onChange={emailInput.onChange}
        value={emailInput.value}
        hasError={emailInput.hasError}
        errorMessage="E-Mail address must not empty and follow email format"
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
