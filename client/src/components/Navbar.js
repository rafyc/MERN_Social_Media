import React, { useContext } from 'react';
import { UidContext } from './AppContext'
import { NavLink } from "react-router-dom";
import Logout from './Log/Logout';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to='/'>
            <div className="logo">
              <img src="./img/icon.png" alt="icon" />
              <h3>Holberton Media</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink to='/profile'>
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink to='/profile'>
                <img src="/img/icons/login.svg" alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
