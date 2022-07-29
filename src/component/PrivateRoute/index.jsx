import React from "react";
import { Route } from "react-router";

export default ({ component: Component, roles, ...rest }) => {
  // const { isAuthenticated, user} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};
