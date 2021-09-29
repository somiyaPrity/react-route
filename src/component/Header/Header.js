import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'Black',
  };
  return (
    <div>
      <NavLink activeStyle={activeStyle} to='/home'>
        Home
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/about'>
        About
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/friends'>
        Friends
      </NavLink>
    </div>
  );
};

export default Header;
