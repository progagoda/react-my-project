import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
let initialState = {
    profile: null,
    newPostText: "",
    postData: [
        { id: 1, message: "My first post", likesCount: 12 },
        { id: 2, message: "My second post", likesCount: 22 }
    ],
    status: "",
    fullName: "Nikita",
    aboutMe: "Hi",
    contacts: [
        { facebook: null },
        { website: null },
        { vk: null },
        { twitter: null },
        { instagram: null },
        { youtube: null },
        { github: null },
        { mainLink: null }
    ],
    photos: [
        { large: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" }
    ],
    cover: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    description: [
        { id: 0, description: "Hi, I'm Artem" },
        { id: 1, description: "I'm software engineer" }
    ],
    socialMedia: [
        { id: 0, name: "@Artem" },
        { id: 1, inst: "https://vk.com/kachochek17" },
        { id: 2, vk: "https://vk.com/kachochek17" }
    ]
}
export const profileThunk = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}
export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(response => {
            dispatch(setStatus(response))
        })
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST): {
            let newPost = {
                name: "Artem",
                id: 6,
                message: state.newPostText,
                likesCount: Math.floor(Math.random() * 20)
            }
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.postData.push(newPost);
            return stateCopy;
        }
        case (UPDATE_NEW_POST_TEXT): {
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case (SET_USER_PROFILE): {
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.profile = action.profile;
            return stateCopy;
        }
        case (SET_STATUS): {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export default profileReducer;
