import React, { useState } from 'react';

type Choice = {
  label: string;
  value: string;
};

type ChoiceToggleProps = {
  choices: Choice[];
  onToggle: (value: string) => void;
  initial: string;
};

const ChoiceToggle: React.FC<ChoiceToggleProps> = ({ choices, onToggle, initial }) => {
  const [selected, setSelected] = useState<string>(initial || choices[0].label);

  const handleClick = (label: string, value: string) => {
    setSelected(label);
    onToggle(value);
  };

  return (
    <div className="space-x-4">
      {choices.map((choice) => (
        <button
          key={choice.label}
          className={`px-4 py-2 rounded-md ${
            selected === choice.label ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleClick(choice.label, choice.value)}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
};

export default ChoiceToggle;
