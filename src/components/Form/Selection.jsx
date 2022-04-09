import React from 'react';

const Selection = ({ symbols, change, values }) => (
  <select
    className='convertor__symbol'
    name='convertorSymbol'
    id='convertorSymbol'
    onChange={change}
  >
    {symbols.map((symbol, i) => (
      <option key={i} value={values[i]}>
        {symbol}
      </option>
    ))}
  </select>
);

export default Selection;
