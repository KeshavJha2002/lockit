import React from 'react';

type RadioButtonProp = {
  label : string,
  name : string,
  value : number,
  checked : boolean,
  onChange : (e:React.ChangeEvent<HTMLInputElement>) => void
};

const RadioButton:React.FC<RadioButtonProp> = ({ label, name, value, checked, onChange, ...props }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <span />
      </label>
    </div>
  );
}

export default RadioButton;