import { PureComponent } from 'react';
import { signIn } from 'next-auth/react';

export class SigninButton extends PureComponent {

    render() {
        return (
            <div>
                <button
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                >                      
                    Sign in with Google
                </button>
            </div>
        )
    }
}

export default SigninButton;