import {usersApi} from "../api/api";
import {setAuthUserData} from "./auth-reducer";
import {setUserProfile} from "./profile-reducer";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
export const follow = (userId) => ({type: FOLLOW, userId})
export const followSuccess= (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUser = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const setFollowingProgress = (isFetching, userId) => ({
    type: FOLLOWING_IN_PROGRESS,
    followingInProgress: isFetching,
    userId
})
export const getUsersThunk = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUser(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true,userId));
        usersApi.follow(userId).then(data => {
            if(data.resultCode===0){
                dispatch(followSuccess(userId))
            }
            dispatch(setFollowingProgress(false,userId))
        })
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true,userId))
        usersApi.unfollow(userId).then(data => {
            if(data.resultCode===0){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(setFollowingProgress(false,userId))
        })
        dispatch(unfollow(userId))
    }
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    isFetching: true,
    currentPage: 4,
    followingInProgress: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case(UNFOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u;
                })
            }
        case(SET_USERS):
            return {
                ...state, users: [...action.users]
            }
        case(SET_CURRENT_PAGE): {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case(TOTAL_USERS_COUNT): {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case(TOGGLE_IS_FETCHING): {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case(FOLLOWING_IN_PROGRESS): {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }

        default:
            return state;
    }
}
export default userReducer;
