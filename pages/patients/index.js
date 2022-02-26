import { PureComponent } from 'react'
import Layout from '../../components/layout'
import privateRoute from '../../util/Auth/privateRoute'

import PatientsGrid from '../../components/PatientsGrid'
import AddPatient from '../../components/AddPatient'

export class Patients extends PureComponent {
  render() {
    return (
      <Layout>
        <PatientsGrid />
        <AddPatient />
      </Layout>
    )
  }
}

export default privateRoute(Patients, { pathAfterFailure: '/' });