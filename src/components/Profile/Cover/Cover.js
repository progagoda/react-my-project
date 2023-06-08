import React from "react";
import classes from "./Cover.module.css";

const Cover=(props)=>{
    return(
        <div className={classes.wrapper}>
            <img src={props.cover}/>
        </div>
    );

}
export  default Cover;