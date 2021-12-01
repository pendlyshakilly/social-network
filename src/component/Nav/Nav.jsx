import React from 'react';
import styles from './Nav.module.css'
import './Active.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.item} activeClassName="active"  to="/content" >Content</NavLink>
            <NavLink className={styles.item} activeClassName="active" to="/dialogs">Messeges</NavLink>
            <NavLink className={styles.item} activeClassName="active" to="/news">News</NavLink>
            <NavLink className={styles.item} activeClassName="active" to="/music">Music</NavLink>
            <NavLink className={styles.item} activeClassName="active" to="/setting">Setting</NavLink>
        </nav>);
}
 
export default Nav;