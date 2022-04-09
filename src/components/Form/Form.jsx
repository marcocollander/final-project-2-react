import React from 'react';
import Selection from './Selection';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import Paragraph from './Paragraph';

const Form = ({ placeholder }) => {
  const [result, setResult] = useState('To jest tyle złoty');
  const [value, setValue] = useState();
  const [code, setCode] = useState();

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onSelectionChange = (e) => {
    setCode(e.option);
    console.log(e.option);
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    getCurrency(code);
  };

  const getCurrency = (currencyCode) => {
    fetch('https://api.nbp.pl/api/exchangerates/tables/a/')
      .then((res) => res.json())
      .then((data) => {
        const currency = data[0].rates.filter(
          (elem) => elem.code === currencyCode
        );
        if (value) {
          setResult(`To ${(currency[0].mid * value).toFixed(2)} PLN`);
        }
        console.log(currency);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className='form'>
      <fieldset className='form__border'>
        <legend className='form__description'>Wybierz symbol waluty</legend>
        <section className='convertor'>
          <Input
            change={onInputChange}
            placeholder={placeholder}
            value={value}
          />
          <Selection
            symbols={['EUR', 'USD', 'CHF']}
            select={onSelectionChange}
          />
          <Button click={onBtnClick} />
          <Paragraph result={result} />
        </section>
      </fieldset>
    </form>
  );
};

export default Form;
