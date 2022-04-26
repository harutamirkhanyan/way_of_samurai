import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import s from './Navbar.module.css';

const Navbar = (props) => {
  const setActive = ({ isActive }) =>(isActive ? s.active : "")

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="dialogs" className={setActive}>Messeges</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="news" className={setActive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music" className={setActive}>Music</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to="settings" className={setActive}>Settings</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to="" className={setActive}>Friends</NavLink>
      {/* <Friends/> */}
      </div>
    </nav>
  );
};
export default Navbar