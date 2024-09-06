import React from 'react';
import './style.css';


const Button = ({disabled, type, onClick, nameButton}) => {
  
  return (
    <button className='button' 
    style={{ display: !disabled ? 'block' : 'none' }} 
    type={type} 
    onClick={onClick} 
    disabled={disabled} >
      <span>{nameButton}</span>
    </button>
  );
};

export default Button;