import React from "react";
import classes from './Description.module.css';
const Description=(props)=>{
    return(
        <div className={classes.wrapper}>
            <div className={classes.border}>
                <h2>About me</h2>
                <div>Name: {props.name}</div>
                <div>{props.description}</div>
            </div>
        </div>
    );
}
export default Description;