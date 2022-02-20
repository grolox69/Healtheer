import React from "react";
import Router from "next/router";
import { getSession } from "next-auth/react";
import Loader from "../../../components/Loader";

const privateRoute = (Component = null, options = {}) => {
    class PrivateRoute extends React.Component {
        state = {
            loading: true,
        };

        async componentDidMount() {
            const session = await getSession()
            
            if (session) {
                this.setState({ loading: false });
            } else {
                Router.push(options.pathAfterFailure || "/login");
            }
        }
      
        render() {
            const { loading } = this.state;

            if (loading) {
                return <Loader />;
            }
        
            return <Component {...this.props} />;
        }
    }
      
    return PrivateRoute;
    
};

export default privateRoute;