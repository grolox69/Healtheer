import { PureComponent } from 'react';
import SigninButton from '../components/SigninButton';
import withSession from "../util/Auth/withSession";
import publicRoute from "../util/Auth/publicRoute";

export class Index extends PureComponent {
  render() {
    const { data: session } = this.props.session;
    return (
        <div className="min-h-screen flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="mt-8">
                <div className="mt-6">
                  <SigninButton />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex relative w-0 flex-1 bg-gradient-to-r from-purple-600 to-purple-300 items-center justify-center shadow-sm border rounded-md">
            <div className='grid grid-cols-1 space-y-5'>
              <h1 className='text-7xl uppercase text-white'>Healtheer</h1>
            </div>
          </div>
        </div>
    )
  }
}

export default publicRoute(withSession(Index), { pathAfterFailure: '/dashboard' });
