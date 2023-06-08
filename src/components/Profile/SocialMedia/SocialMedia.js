import React from "react";
import classes from "./SocialMedia.module.css"

const SocialMedia =(props)=>{
    return(
      <div className={classes.socialMedia}>
          <div className={classes.name}>
              {props.name}
          </div>
          <div className={classes.network}>
              {props.inst &&
              <a href={props.inst}>
                  <img src="https://www.svgrepo.com/show/111199/instagram.svg"/>
              </a>
              }
              {props.vk &&
              <a href={props.vk}>
                  <img src="https://www.svgrepo.com/show/349554/vk.svg"/>
              </a>
              }
          </div>
      </div>
    );
}
export  default SocialMedia;