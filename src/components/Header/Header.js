import React, {Component} from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../Img/logo.png'
const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={logo}/>
            <div className={classes.header_text}>
                COMMUNITY
            </div>
            <div className={classes.header_profile}>
                {props.isAuth ? props.login:
                <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );

}
export default Header;