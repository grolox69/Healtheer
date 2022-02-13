import { PureComponent } from 'react';
import { LogoutIcon } from '@heroicons/react/outline';

export class LogoutButton extends PureComponent {
    render() {
        return (
            <div className="flex-shrink-0 flex p-4">
                <div className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                        <a 
                            className="flex ml-3 items-center"
                            href='#'
                        >
                            <LogoutIcon className='h-6 w-6 text-white mr-2' />
                            <p className="text-sm font-medium text-white">Logout</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default LogoutButton;