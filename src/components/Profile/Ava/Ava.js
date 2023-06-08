import React from "react";
import classes from "./Ava.module.css";
const Ava=(props)=>{
    return(
        <div className={classes.ava}>
            <div className={classes.box}>
                <div className={classes.circle}>
                    <img src={props.ava}/>
                </div>

            </div>
        </div>
    );
}
export default Ava;