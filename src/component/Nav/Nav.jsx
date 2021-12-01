import React from 'react';
import s from './Nav.module.css'
import './Active.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
               <NavLink className={s.item} activeClassName="active"  to="/content" >Content</NavLink>
            </div>
            <div >
                <NavLink className={s.item} activeClassName="active" to="/dialogs">Messeges</NavLink>
            </div>
            <div >
                <NavLink className={s.item} activeClassName="active" to="/news">News</NavLink>
            </div>
            <div >
                <NavLink className={s.item}  activeClassName="active" to="/music">Music</NavLink>
            </div>
            <div >
                <NavLink className={s.item} activeClassName="active" to="/setting">setting</NavLink>
            </div>
       </nav>);
}
 

export default Nav;