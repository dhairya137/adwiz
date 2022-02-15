import React from 'react'
import classes from './navbar.module.css';
import logo from '../../../Assets/logo.svg';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className={classes.navContainer}>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className={classes.ulClass}>
                <li><a href="">features</a></li>
                <li><a href="">pricing</a></li>
                <li><NavLink to="/chat">help</NavLink></li>
                <li><NavLink to="/login">log in</NavLink></li>
                <li><NavLink to="/signup">sign up</NavLink></li>
                <NavLink className={classes.buttonClass} to="/ads">GET STARTED</NavLink>
                </ul>
        </nav>
    )
}

export default Navbar
