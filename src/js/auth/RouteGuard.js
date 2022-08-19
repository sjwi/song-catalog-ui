import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Currently not used but can be used in Routes.js to protect certain paths
const RouteGuard = ({ component: Component, ...rest }) => {

  function hasJWT() {
    let flag = false;
    localStorage.getItem("token") ? flag = true : flag = false
    return flag
  }

  return (
    <Route {...rest}
      render={props => (
        hasJWT() ?
          <Component {...props} />
          :
          <Redirect to={{ pathname: '/' }} />
      )}
    />
  );
};

export default RouteGuard;