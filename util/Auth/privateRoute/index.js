import React from "react";
import Router from "next/router";
import { getSession } from "next-auth/react";
import withSession from "../../../util/Auth/withSession";
import Loader from "../../../components/Loader";

const privateRoute = (Component = null, options = {}) => {
    class PrivateRoute extends React.Component {
        state = {
            isLoading: true,
        };

        async componentDidMount() {
            const session = await getSession();
            if (session) {
                this.setState({ isLoading: false });
            } else {
                Router.push(options.pathAfterFailure || "/login");
            }
        }
      
        render() {
            const { isLoading } = this.state;
            const { status } = this.props.session;

            if (isLoading || status === 'loading') {
                return <Loader />;
            }
        
            return <Component {...this.props} />;
        }
    }
      
    return withSession(PrivateRoute);
    
};

export default privateRoute;