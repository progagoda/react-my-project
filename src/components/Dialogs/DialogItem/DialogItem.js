import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <img src={props.ava}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItems;