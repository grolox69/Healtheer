import { PureComponent } from "react";
import Layout from '../../components/layout'
import privateRoute from '../../util/Auth/privateRoute'

export class Create extends PureComponent {
    render() {
        return (
            <Layout>
                <h1>Create page</h1>
            </Layout>
        )
    }
}

export default privateRoute(Create);