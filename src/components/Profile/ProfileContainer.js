import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {
    getProfile,
    getProfileStatus,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {withRouter} from "../common/withRouter/withRouter";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            if (!this.props.myId) {
                userId = 2
            }
            userId = this.props.myId
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile  {...this.props}  />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
    status: state.profilePage.status
})


export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter
)(ProfileContainer)

