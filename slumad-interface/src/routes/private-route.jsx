import React from "react";

import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

function PrivateRoute({ element, ...rest }) {

    const user = localStorage.getItem('slumad:userData')


    if (!user) {
        return <Redirect to='/login' />
    }

    return <Route {...rest} element = {element}/>
}

PrivateRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
export default PrivateRoute