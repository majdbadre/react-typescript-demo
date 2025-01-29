import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" onChange={props.handleChange} value={props.value} />
    </div>
  );
};

export default Input;
