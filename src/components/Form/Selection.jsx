import React from 'react';

const Selection = ({ symbols, select }) => (
  <select
    className='convertor__symbol'
    name='convertorSymbol'
    id='convertorSymbol'
    onSelect={select}
  >
    {symbols.map((symbol, i) => (
      <option key={i}>{symbol}</option>
    ))}
  </select>
);

export default Selection;
