import React from 'react';

interface RangeSliderProps {
  label: string;
  name: string;
  min: number;
  max: number;
  value: number;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const RangeSlider: React.FC<RangeSliderProps> = ({ label, name, min = 1, max = 100, value, onChange, className, ...props }) => {
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.target instanceof Element) {
      const { clientX } = e.targetTouches[0];
      const touchX = clientX;
      const rect = e.target.getBoundingClientRect();
      const sliderWidth = rect.width;
      const x = touchX - rect.x;
      const selection = x / sliderWidth;
      const range = max - min;
      const newValue = Math.floor(range * selection + min);
      if (newValue !== value) {
        const input = e.target.querySelector('input');
        if (input) {
          input.value = newValue.toString();
        }
        onChange(e);
      }
    }
  };
  className+=" w-full max-w-[800px] m-auto"
  return (
    <div className={className}>
      <label>{label}</label>
      <span>{value}</span>
      <input
        type="range"
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        onTouchStart={handleTouchStart}
        {...props}
      />
    </div>
  );
}

export default RangeSlider;