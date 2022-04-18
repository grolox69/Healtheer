import { PureComponent } from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import privateRoute from "../../util/Auth/privateRoute"

import DashboardHeading from '../../components/DashboardHeading';

export class Dashboard extends PureComponent {
  render() {
    const { data: session } = this.props.session;

    return (
      <Layout>
        <DashboardHeading name={session.user.name} imageUrl={session.user.image} />
        <div className='flex items-center justify-center'>
            <Image src="/homepage.svg" alt="" width='500px' height='500px' />
        </div>
        <span className='w-full flex justify-center text-xl text-[#643A6A]'>
            Welcome to Healtheer.
        </span>
      </Layout>
    )
  }
}

export default privateRoute(Dashboard, { pathAfterFailure: '/' });