import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header=(props)=>{
    return  <header className={style.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRvUBtumSw6XlzUX71fhs3hcSqe2Crm2bqQ&usqp=CAU' alt='img'/>
    <div className={style.login}>
      {props.isAuth? props.login : <NavLink to={'/login'}>Login</NavLink>}
     
    </div>
  </header>
}

export default Header