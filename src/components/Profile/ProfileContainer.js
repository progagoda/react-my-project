import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profileThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.profileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>;
        return (
            <Profile {...this.props} updateStatus={this.props.updateStatusThunk} status={this.props.store.getState().profile.status} profile={this.props.store.getState().profile.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status:state.profile.status
})
export default compose(connect(mapStateToProps,{profileThunk,getStatusThunk,updateStatusThunk})
    ,withRouter,
    withAuthRedirect)(ProfileContainer)