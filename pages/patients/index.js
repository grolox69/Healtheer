import { PureComponent } from 'react'
import Layout from '../../components/layout'
import withSession from "../../util/Auth/withSession";

export class Patients extends PureComponent {
  render() {
    const { data: session } = this.props.session;
    return (
      <Layout>
        {session && <h1 className='text-5xl'>Patients</h1>}
      </Layout>
    )
  }
}

export default withSession(Patients);