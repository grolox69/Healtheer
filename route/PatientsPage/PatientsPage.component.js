import { PureComponent } from 'react'
import Layout from '../../components/layout'
import privateRoute from '../../util/Auth/privateRoute'

import PatientsGrid from '../../components/PatientsGrid'
import Modal from '../../components/Modal'
import PatientForm from '../../components/PatientForm'
import AddPatient from '../../components/AddPatient'

export class PatientsPage extends PureComponent {

  render() {
    return (
      <Layout>
        <PatientsGrid />
        <Modal>
          <PatientForm />
        </Modal>
        <AddPatient />
      </Layout>
    )
  }
}

export default privateRoute(PatientsPage, { pathAfterFailure: '/' });