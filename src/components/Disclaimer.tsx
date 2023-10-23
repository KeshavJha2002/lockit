import React from 'react';
import { Link } from 'react-router-dom';

const Disclaimer: React.FC = () => {
  return (
    <div className='max-w-[800px] mx-auto rounded-md p-8 text-gray-700 bg-white shadow-md'>
      Your secrets are generated on this device with a{' '}
      <Link
        to="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"
        title="getRandomValues docs on Mozilla.org"
        className="underline text-blue-700 hover:text-blue-500"
      >
        cryptographically strong random number generator
      </Link>{' '}
      and are not transmitted or persisted in any way. Just look out for nosy parkers and
      close this browser tab when you're done.
    </div>
  );
};

export default Disclaimer;
