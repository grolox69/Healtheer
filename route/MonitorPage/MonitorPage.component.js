import { PureComponent } from 'react'
import Layout from '../../components/layout'
import privateRoute from "../../util/Auth/privateRoute"

import PatientMonitor from '../../components/PatientMonitor';

export class Monitor extends PureComponent {
  render() {
    return (
      <Layout>
        <PatientMonitor />
      </Layout>
    )
  }
}

export default privateRoute(Monitor, { pathAfterFailure: '/' });