import {connect} from "react-redux";
import App from "./App";
import {Route, Switch} from "react-router";
import {APP, SIGN_IN, SIGN_UP} from "../../additionalData/links/front";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import React from "react";

const mapStateToProps = (state) => ({
    currentUser: state.profile.current
});

const mapDispatchToProps = (dispatch) => ({});

const Body = ({currentUser}) => console.log(currentUser) || (
    <Switch>

        <Route path={SIGN_UP}>
            {currentUser ? <App/> : <SignUp/>}
        </Route>

        <Route path={SIGN_IN}>
            {currentUser ? <App/> : <SignIn/>}
        </Route>

        <Route path={APP}>
            {currentUser ? <App/> : <SignIn/>}
        </Route>
    </Switch>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);