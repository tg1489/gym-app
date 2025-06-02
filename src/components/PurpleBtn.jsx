import React from 'react';
import '../css/PurpleBtn.css';

export const PurpleBtn = (props) => {
  return (
    <a
      href='./'
      className='purple-btn border-0 text-capitalize text-light text-decoration-none text-nowrap'
    >
      {props.btnTitle}
    </a>
  );
};
