import React,{Component} from "react";
import  classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props)=>{
    let postElements = props.postData.slice(0).reverse().map((post)=>
        (<Post ava={props.ava} name={props.name} message={post.message} likes={post.likesCount}/>))
    let newPostElement=React.createRef();
    let onAddPost=()=>{
        props.addPost();
        newPostElement.current.value="";
    }
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return(
            <div className={classes.content}>
                <div>Add post</div>
                <div className={classes.wrapper}>
                <textarea onChange={onPostChange} ref={newPostElement}/>
                <button onClick={onAddPost}>Add</button>
                </div>
                <div>My posts</div>
                {postElements}
            </div>

    );

}
export  default MyPosts;