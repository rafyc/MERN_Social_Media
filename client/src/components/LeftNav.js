import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink className={(navData) => navData.isActive ? "active-left-nav" : ""} end to="/">
            <img src="./img/icons/home.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink className={(navData) => navData.isActive ? "active-left-nav" : ""} to="/trending">
            <img src="./img/icons/rocket.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink className={(navData) => navData.isActive ? "active-left-nav" : ""} to="/profile">
            <img src="./img/icons/user.svg" alt="home" />
          </NavLink>
        </div>
      </div>
    </div >
  )
}

export default LeftNav;
