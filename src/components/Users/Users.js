import React from "react";
import classes from "./Users.module.css";
import logo from "../Img/logo.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    return (

        <div>
            <div className={classes.pageCounter}>

                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p);
                    }} className={props.currentPage === p && classes.selectedPage}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.wrapper}>
                         <span className={classes.body}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : logo}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollowThunk(u.id)
                                }}>Follow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.followThunk(u.id);
                                }}>Unfollow</button>}
                        </div>
                    </span>
                             <span>
                     <span className={classes.border}>
                         {u.name}
                     </span>
                     <span><div className={classes.status}>{u.status}</div></span>
                    </span>
                         </span>
                        <span className={classes.location}><div className={classes.border}>Location:</div>
                            "u.location"
                        </span>
                    </div>)}
        </div>)
}

export default Users;