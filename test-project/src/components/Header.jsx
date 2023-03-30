import React from 'react';
import user from '../assets/image/User.svg';

const Header = () => {
  const [active, setActive] = React.useState(1);

  return (
    <header className="header">
      <div className="header__menu">
        <a className="nav" href="#">
          Blog
        </a>
        <a className="nav" href="#">
          Useful Resources
        </a>
        <div className="language">
          <div
            onClick={() => setActive(1)}
            className={active === 1 ? 'lang_button active' : 'lang_button'}>
            Eng
          </div>
          <div
            onClick={() => setActive(2)}
            className={active === 2 ? 'lang_button active' : 'lang_button'}>
            Rus
          </div>
        </div>
        <img src={user} alt="" className="user__img" />
      </div>
    </header>
  );
};

export default Header;
