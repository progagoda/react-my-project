import React from 'react';
import classes from './Post.module.css';
const Post=(props)=>{
    return(
        <div className={classes.wrapper}>
        <div className={classes.name}>
            {props.name}
        </div>
        <div className={classes.avatar}>
            <img src={props.ava}/>
        </div>
        <div className={classes.bodyPost}>
            <div>{props.message}</div>
            <div>{props.likes}<img src={"https://www.svgrepo.com/show/157856/like.svg"}/></div>
        </div>
            </div>
);
}

export  default  Post;