import React from "react";
import Router from "next/router";
import { getSession } from "next-auth/react";
import Loader from "../../../components/Loader";

const publicRoute = (Component = null, options = {}) => {
    class PublicRoute extends React.Component {
        state = {
            isLoading: true,
        };

        async componentDidMount() {
            const session = await getSession()
            
            if (!session) {
                this.setState({ isLoading: false });
            } else {
                Router.push(options.pathAfterFailure || "/dashboard");
            }
        }
      
        render() {
            const { isLoading } = this.state;

            if (isLoading) {
                return <Loader />;
            }
        
            return <Component {...this.props} />;
        }
    }
      
    return PublicRoute;
    
};

export default publicRoute;