import React from 'react'
import { Redirect, Route } from "react-router-dom";
const PrivateRouter = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('ACCESS_TOKEN_NAME') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRouter
