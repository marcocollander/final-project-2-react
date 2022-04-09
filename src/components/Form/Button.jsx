import React from 'react';

const Button = ({ click }) => (
  <button className='convertor__btn' type='submit' onClick={click}>
    Przelicz
  </button>
);

export default Button;
