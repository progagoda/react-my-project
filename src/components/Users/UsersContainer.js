import React from "react";
import classes from "./Users.module.css"
import {connect} from "react-redux";
import {
    followThunk,
    getUsersThunk,
    setCurrentPage,
    setFollowingProgress,
    setIsFetching,
    setUsersTotalCount,
    unfollowThunk
} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber,this.props.pageSize)
        this.props.setCurrentPage(pageNumber)

    }

    componentDidMount() {
            this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)

    }

    render() {
        return (
            <>

                {this.props.isFetching ? <img src="https://i.gifer.com/XDZT.gif" className={classes.preloader}/> : null}
                <Users unfollowThunk={this.props.unfollowThunk}

                       followThunk={this.props.followThunk}
                       users={this.props.users}
                       followingInProgress={this.props.followingInProgress}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setFollowingProgress={this.props.setFollowingProgress}
                       onPageChanged={this.onPageChanged.bind(this.state)}/>
            </>
        )
    }

}
let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        totalUsersCount: state.users.totalUsersCount,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress

    }

}

export default compose(withAuthRedirect,connect(mapStateToProps,{setCurrentPage,setIsFetching,getUsersThunk,setUsersTotalCount,followThunk,unfollowThunk,setFollowingProgress}))(UsersContainer)