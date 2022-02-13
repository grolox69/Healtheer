import { PureComponent } from 'react';
import {
    ClockIcon,
    DocumentReportIcon,
    HomeIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export class SidebarTabs extends PureComponent {
    navigation = [
        { name: 'Home', href: '#', icon: HomeIcon, current: true },
        { name: 'Patients', href: '#', icon: UserGroupIcon, current: false },
        { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
        { name: 'History', href: '#', icon: ClockIcon, current: false },
    ]

    renderMobileTabs() {
        return (
            <nav
                className="mt-5 px-2 space-y-1"
                aria-label="Sidebar"
            >
                <div className="px-2 space-y-1">
                    {this.navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-[#FFE7FF] text-[#986A9E]' : 'text-white hover:text-white hover:bg-[#4BBDB7]',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                            <item.icon className={classNames(item.current ? 'text-[#986A9E]' : 'text-white','mr-4 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
                            {item.name}
                        </a>
                    ))}
                </div>
                
            </nav>
        )
    }

    renderDesktopTabs() {
        return (
            <nav 
                className="mt-5 flex-1 flex flex-col overflow-y-auto" 
                aria-label="Sidebar"
            >
                <div className="px-2 space-y-1">
                    {this.navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-[#FFE7FF] text-[#986A9E]' : 'text-white hover:text-white hover:bg-[#4BBDB7]',
                            'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                            <item.icon className={classNames(item.current ? 'text-[#986A9E]' : 'text-white','mr-4 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        )
    }

    render() {
        const { isMobile } = this.props;

        return (
            isMobile ? this.renderMobileTabs() : this.renderDesktopTabs()
        )
    }
}

export default SidebarTabs;