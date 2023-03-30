import React from 'react';
import { version } from 'react-dom';
import logo from '../assets/image/Logo.svg';
import vector1 from '../assets/image/Vector-1.svg';
import vector2 from '../assets/image/Vector-2.svg';
import vector3 from '../assets/image/Vector-3.svg';
import vector4 from '../assets/image/Vector-4.svg';
import vector5 from '../assets/image/Vector-5.svg';
import vector6 from '../assets/image/Vector-6.svg';

import vector11 from '../assets/image/changeIcon/Vector-1.svg';
import vector22 from '../assets/image/changeIcon/Vector-2.svg';
import vector33 from '../assets/image/changeIcon/Vector-3.svg';
import vector44 from '../assets/image/changeIcon/Vector-4.svg';
import vector55 from '../assets/image/changeIcon/Vector-5.svg';
import vector66 from '../assets/image/changeIcon/Vector-6.svg';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const OnClickListItem = (index) => {
    setActiveIndex(index);
    setSidebar(index);
  };
  const list = [
    {
      name: 'Dashboard',
      img: vector1,
      img2: vector11,
    },
    {
      name: 'Profile',
      img: vector2,
      img2: vector22,
    },
    {
      name: 'Recommendations',
      img: vector3,
      img2: vector33,
    },
    {
      name: 'Catalog',
      img: vector4,
      img2: vector44,
    },
    {
      name: 'Saved',
      img: vector5,
      img2: vector55,
    },
    {
      name: 'Applications',
      img: vector6,
      img2: vector66,
    },
  ];

  console.log(vector3);

  const [sidebar, setSidebar] = React.useState(0);

  return (
    <div className="sidebar">
      <div className="menu__logo">
        <img src={logo} alt="" />
      </div>
      {list.map((obj, index) => (
        <div
          onClick={() => OnClickListItem(index)}
          key={obj.name}
          className={index === sidebar ? 'sidebar__menu active' : 'sidebar__menu'}>
          <img className="menu__img" src={index === sidebar ? obj.img2 : obj.img} alt="" />
          <div href="" className="menu__title">
            {obj.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
