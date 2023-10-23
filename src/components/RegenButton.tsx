import React from 'react';
import Button from './common/Button';
import RefreshIcon from '../images/repeat.svg';

interface RegenButtonProps {
  onClick: React.MouseEventHandler; 
}

const RegenButton: React.FC<RegenButtonProps> = ({ onClick }) => {
  return (
    <div className='text-center mt-4 max-w-[800px] mx-auto mb-[1rem]'>
      <Button
        onClick={onClick}
        title="Generate new secrets (R)"
        className='py-2 px-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md'
      >
        <div className='flex items-center justify-center'>
          <img src={RefreshIcon} alt="Refresh Icon" className='h-4 w-4 mr-2' />
          Regenerate Secrets
        </div>
      </Button>
    </div>
  );
}

export default RegenButton;
