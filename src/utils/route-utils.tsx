import { Redirect, Route } from "react-router-dom";
import { ElementType } from "react";

interface ReRouteProps {
  component: ElementType;
  [key: string]: any;
}

export const PrivateRoute = ({ component: Component, ...rest }: ReRouteProps) => {
      return (
        <Route
            { ...rest }
            render={ (props) =>
                rest.needLogin === true ? (
                    <Redirect to="/landing" />
                ) : (
                        <Component { ...props } />
                    )
            }
        />
    );
}

export const ProtectedRoute = ({ component: Component, ...rest }: ReRouteProps) => (
    <Route
        { ...rest }
        render={ (props) =>
            rest.needLogin !== true ? <Redirect to="/" /> : <Component { ...props } />
        }
    />
);
