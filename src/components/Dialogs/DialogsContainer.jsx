import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})
        },
        addMessage: () => {
            dispatch({type: "ADD-MESSAGE"});
        }
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapStateToProps = (state) => {
    return {
        state: state.dialogs,
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);