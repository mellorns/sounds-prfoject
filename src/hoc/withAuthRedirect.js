
import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export const withAuthRedirect = (Component) => {

    class RedirectedComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to='/login' />

            return <Component {...this.props} />
        }

    }

    let ConnectedRedirectedComponent = connect(mapStateToProps)(RedirectedComponent)

    return ConnectedRedirectedComponent
}

