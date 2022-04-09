import React from 'react';
import bitcoin from '../../images/bitcoin.jpg';

const Header = () => (
  <>
    <header className='header'>
      <h1 className='header__heading'>Przelicznik walut</h1>
      <img
        src={bitcoin}
        alt='bitcoin'
        className='header__logo'
        width='450'
        height='300'
      />
    </header>
  </>
);

export default Header;
