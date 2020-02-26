import * as React from "react";

const InputField = ({ handleOnChange, value, label }) => {
  const handleChange = event => {
    const {
      target: { value }
    } = event;
    handleOnChange(value);
  };

  return (
    <label>
      {label}
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
};

export default InputField;
