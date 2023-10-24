import React from 'react';

type CheckBoxProp = {
  label: string,
  name: string,
  checked: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: number
};

const CheckBox: React.FC<CheckBoxProp> = ({ label, name, value, checked, onChange, ...props }) => {
  return (
    <div className="mb-4">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="form-checkbox text-indigo-600 h-5 w-5"
          {...props}
        />
        <span className="text-gray-700">{label}</span>
      </label>
    </div>
  );
}

export default CheckBox;
