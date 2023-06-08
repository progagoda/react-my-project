import React, {Component} from "react";
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Description from "./Description/Description";
import Ava from "./Ava/Ava";
import Cover from "./Cover/Cover";
import SocialMedia from "./SocialMedia/SocialMedia";
import ProfileStatus from "./Description/ProfileStatus";


const Profile = (props) => {
    if(!props.profile){
         return <img src={"https://i.gifer.com/XDZT.gif"}/>
    }
    return (
        <div>
            <Cover
                cover={props.store.getState().profile.cover}/>
            <Ava ava={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <SocialMedia name={props.profile.fullName} inst={props.profile.contacts.instagram} vk={props.profile.contacts.vk}/>
            <div className={classes.wrapper}>
                <MyPostsContainer store={props.store} className={classes.myposts}/>
                    <Description name={props.profile.fullName} description={props.profile.aboutMe} className={classes.description}/>
            </div>
        </div>
    );

}
export default Profile;