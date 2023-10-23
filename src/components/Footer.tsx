import React from 'react';
import { Link } from 'react-router-dom';
import Heart from '../images/heart.svg';

const Footer: React.FC = () => {
  return (
    <div className="py-4 px-0 text-center text-lg text-gray-600 flex flex-col w-full">
      <span className="text-2xl font-semibold mb-2">Made with</span>
      <span>
        <img src={Heart} alt="Love" className="h-6 text-red-600 mx-auto" />
      </span>
      <span className="text-lg">
        by{' '}
        <Link to="https://github.com/KeshavJha2002" title="Keshav Jha's github" className="underline text-blue-700 hover:text-blue-500">
          KeshavJha2002
        </Link>
      </span>
      <span className="text-lg">
        <Link to="https://github.com/KeshavJha2002/lockit" title="See the code on GitHub" className="underline text-gray-700 hover:font-semibold hover:text-gray-900">
          Have a look at the code
        </Link>
      </span>
    </div>
  );
};

export default Footer;
