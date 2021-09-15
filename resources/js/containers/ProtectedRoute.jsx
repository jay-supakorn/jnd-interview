import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthLayout from "./AuthLayout";

const ProtectedRoute = ({
    path,
    component: Component,
    render,
    loggedIn,
    ...rest
}) => {
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                if (loggedIn) {
                    return Component ? (
                        <AuthLayout {...props}>
                            <Component {...props} />
                        </AuthLayout>
                    ) : (
                        render(props)
                    );
                }
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                );
            }}
        />
    );
};

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        loggedIn: !!user.accessToken,
    };
};

export default connect(mapStateToProps)(ProtectedRoute);
