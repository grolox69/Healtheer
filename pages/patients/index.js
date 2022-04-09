import { PureComponent } from 'react'
import Layout from '../../components/layout'
import privateRoute from '../../util/Auth/privateRoute'

import PatientsGrid from '../../components/PatientsGrid'
import Modal from '../../components/Modal'
import PatientForm from '../../components/PatientForm'
import AddPatient from '../../components/AddPatient'

import baseUrl from '../../util/baseUrl'

export class Patients extends PureComponent {

  render() {
    const { data: { patients } } = this.props

    return (
      <Layout>
        <PatientsGrid patients={patients} />
        <Modal>
          <PatientForm />
        </Modal>
        <AddPatient />
      </Layout>
    )
  }
}

export async function getServerSideProps(context) {
  const response = await fetch(`${baseUrl}/api/patients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cookie: context.req.headers.cookie,
    },
  })
  
  const data = await response.json()
  
  return { props: { data } }
}

export default privateRoute(Patients, { pathAfterFailure: '/' });