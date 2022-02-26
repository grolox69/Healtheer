import { PureComponent } from 'react'
import Layout from '../../components/layout'
import privateRoute from "../../util/Auth/privateRoute"

import DashboardHeading from '../../components/DashboardHeading';
import MonitorCard from '../../components/MonitorCard';

export class Dashboard extends PureComponent {
  render() {
    const { data: session } = this.props.session;

    return (
      <Layout>
        <DashboardHeading name={session.user.name} imageUrl={session.user.image} />
        
      </Layout>
    )
  }
}

export default privateRoute(Dashboard, { pathAfterFailure: '/' });