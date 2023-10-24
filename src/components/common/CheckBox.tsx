import React from 'react';

type CheckBoxProp = {
  label: string;
  name: string;
  value: number;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckBoxProp> = ({ label, name, value, checked, onChange, ...props }) => {
  return (
    <div className="mb-4 max-w-[800px] mx-auto">
      <label className="flex items-center space-x-2 text-gray-700">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-indigo-600"
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default CheckBox;
