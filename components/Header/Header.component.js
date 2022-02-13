import { PureComponent } from 'react';
import SidebarOpenButton from '../SidebarOpenButton';
import SearchField from '../SearchField';
import NotificationButton from '../NotificationButton';
import ProfileDropdown from '../ProfileDropdown';

export class Header extends PureComponent {
    render() {
        return (
            
            <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none drop-shadow-sm">
                <SidebarOpenButton />
                <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    <SearchField />
                    <div className="ml-4 flex items-center md:ml-6">
                        <NotificationButton />
                        <ProfileDropdown />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Header;