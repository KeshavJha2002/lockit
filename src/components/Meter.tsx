import React from 'react';
import config from '../config';
import CoolFace from '../images/cool.svg';
import HappyFace from '../images/smile.svg';
import NervousFace from '../images/eek.svg';

const { strengthsEnum } = config;

interface MeterProps {
  entropy: string | number;
}

type EmoType = {
  strength : string,
  color : string
};

const strengthGlyphs = {
  [strengthsEnum.OK]: <img src={NervousFace} alt="Nervous-face" className="h-8 w-8 mr-2" />,
  [strengthsEnum.GOOD]: <img src={HappyFace} alt="Happy-face" className="h-8 w-8 mr-2" />,
  [strengthsEnum.STRONG]: <img src={CoolFace} alt="Cool-face" className="h-8 w-8 mr-2" />,
};

const getStrength = (bits: number) => {
  if (bits <= 45) return {strength : strengthsEnum.OK, color : " bg-red-500"};
  if (bits > 45 && bits <= 60) return {strength : strengthsEnum.GOOD, color : " bg-blue-500"};
  return {strength : strengthsEnum.STRONG, color : " bg-green-600"};
};

const Meter: React.FC<MeterProps> = ({ entropy }) => {
  const emoticons: EmoType = getStrength(Number(entropy));
  const emoji = strengthGlyphs[emoticons.strength];
  entropy = Math.round(Number(entropy));
  let className = "max-w-[800px] mx-auto p-4 border-gray-400 shadow-lg flex justify-evenly items-center text-lg";
  className += emoticons.color;
  return (
    <div className={className}>
      <span aria-label={emoticons.strength}>{emoji}</span>
      <span className="font-bold">{emoticons.strength}</span>
      <span title={`About ${entropy} bits of entropy`}>~{entropy} bits</span>
    </div>
  );
};

export default Meter;
