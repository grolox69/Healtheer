import { PureComponent } from 'react'
import Layout from '../../components/layout'
import privateRoute from '../../util/Auth/privateRoute'

export class Patients extends PureComponent {
  render() {
    return (
      <Layout>
        <h1 className='text-5xl'>Patients</h1>
      </Layout>
    )
  }
}

export default privateRoute(Patients, { pathAfterFailure: '/' });