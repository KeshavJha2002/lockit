
import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div className="max-w-[800px] mx-auto p-4 text-gray-700 bg-white rounded-md shadow-md mb-[2rem] text-[1.1rem]">
      <h2 className="text-2xl font-semibold mb-4">How does this work?</h2>
      <ol className="list-decimal pl-6">
        <li className="mb-2">Set your parameters</li>
        <li className="mb-2">Choose a secret, any will do</li>
        <li className="mb-2">Click to copy</li>
        <li>Enjoy your day</li>
      </ol>
    </div>
  );
}

export default Instructions;