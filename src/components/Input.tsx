import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
};

export default Input;
