import { PureComponent } from 'react';
import {
    MenuAlt1Icon
} from '@heroicons/react/outline';

export class SidebarOpenButton extends PureComponent {
    
    render() {
        const { openMobileSidebar } = this.props;
        
        return (
            
            <button
                type="button"
                className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#643A6A] lg:hidden"
                onClick={openMobileSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            
        )
    }
}

export default SidebarOpenButton;