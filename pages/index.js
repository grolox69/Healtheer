import { PureComponent } from 'react';
// import IndexLogo from '../components/IndexLogo';
// import SigninForm from '../components/SigninForm';
import { signIn, signOut } from "next-auth/react"
import withSession from "../util/Auth/withSession";
import Link from 'next/link';

export class Index extends PureComponent {

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const { data: session } = this.props.session;
    return (
      <>
      <div className="min-h-screen flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mt-8">
              <div className="mt-6">
                
                <div>
                  <button
                    
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => signIn('google')}
                  >                      
                    Sign in with Google
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative w-0 flex-1 bg-gradient-to-r from-purple-600 to-purple-300 items-center justify-center shadow-sm border rounded-md">
          <div className='grid grid-cols-1 space-y-5'>
            <h1 className='text-7xl uppercase text-white'>Healtheer</h1>
            {session && 
              <p className='text-white text-4xl'>Signed in as {session.user.email}</p>
            }
            {session && 
              <Link href='/dashboard'><a className="text-3xl text-indigo-300">Dashboard</a></Link>
            }
            {session && 
              <button onClick={() => signOut()} className='bg-indigo-900 rounded-md text-white font-bold p-3'>Sign out</button>
            }
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default withSession(Index);
