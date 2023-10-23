import React from 'react';

interface ButtonProps {
  children: React.ReactNode
  onClick : React.MouseEventHandler,
  title? : string,
  className : string
}

const Button:React.FC<ButtonProps> = ( { children, onClick, className } ) => {
  return(
    <button className={className} onClick={onClick} >
      { children }
    </button>
  )
}

export default Button;
