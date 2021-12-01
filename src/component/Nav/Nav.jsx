import React from 'react';
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const setClassName = ({isActive}) => isActive ? `${styles.item} ${styles.activeLink}` : styles.item

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink className={setClassName} to="/content" >Content</NavLink>
            <NavLink className={setClassName} to="/dialogs">Messeges</NavLink>
            <NavLink className={setClassName} to="/news">News</NavLink>
            <NavLink className={setClassName} to="/music">Music</NavLink>
            <NavLink className={setClassName} to="/setting">Setting</NavLink>
        </nav>);
}
 
export default Nav;