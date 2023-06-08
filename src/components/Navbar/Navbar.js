import React, {Component} from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <img src="https://www.svgrepo.com/show/113697/criminal-posing-for-police-picture.svg"/>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <img src="https://www.svgrepo.com/show/360571/messages.svg"/>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? classes.active : classes.item}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <img src="https://www.svgrepo.com/show/175123/users.svg"/>
                <NavLink to="/users"
                         className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <img src="https://www.svgrepo.com/show/76503/news.svg"/>
                <NavLink to="#">News</NavLink>
            </div>
            <div className={classes.item}>
                <img src="https://www.svgrepo.com/show/33268/music.svg"/>
                <NavLink to="#">Music</NavLink>
            </div>
            <div className={classes.item}>
                <img src="https://www.svgrepo.com/show/11478/settings.svg"/>
                <NavLink to="#">Settings</NavLink>
            </div>
            <div className={classes.bestfriend}> Best friends</div>
            <div className={classes.bestfriend__wrapper}>

                <div className={classes.friendsItem}>
                    <div className={classes.name}>{props.state.dialogsData[0].name}</div>
                    <img src={props.state.dialogsData[0].avaLink}/>
                </div>
                <div className={classes.friendsItem}>
                    <div className={classes.name}>{props.state.dialogsData[1].name}</div>
                    <img src={props.state.dialogsData[1].avaLink}/>

                </div>
                <div className={classes.friendsItem}>
                    <div className={classes.name}>{props.state.dialogsData[2].name}</div>
                    <img src={props.state.dialogsData[2].avaLink}/>

                </div>
            </div>

</nav>
)
    ;

}
export default Navbar;