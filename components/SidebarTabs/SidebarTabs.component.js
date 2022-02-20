import { PureComponent } from 'react';
import {
    ClockIcon,
    DocumentReportIcon,
    HomeIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';
import { withRouter } from 'next/router'
import Link from 'next/link';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export class SidebarTabs extends PureComponent {
    navigation = [
        { name: 'Home', href: '/dashboard', icon: HomeIcon },
        { name: 'Patients', href: '/patients', icon: UserGroupIcon},
        { name: 'Reports', href: '#', icon: DocumentReportIcon},
        { name: 'History', href: '#', icon: ClockIcon},
    ]

    renderMobileTabs() {
        const { router } = this.props;
        return (
            <nav
                className="mt-5 px-2 space-y-1"
                aria-label="Sidebar"
            >
                <div className="px-2 space-y-1">
                    {this.navigation.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                        >
                            <a
                                className={classNames(
                                    item.href === router.pathname ? 'bg-[#FFE7FF] text-[#986A9E]' : 'text-white hover:text-white hover:bg-[#4BBDB7]',
                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                )}
                                aria-current={item.href === router.pathname ? 'page' : undefined}
                            >
                                <item.icon className={classNames(item.href === router.pathname ? 'text-[#986A9E]' : 'text-white','mr-4 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
                                {item.name}
                            </a>
                        </Link>
                    ))}
                </div>
                
            </nav>
        )
    }

    renderDesktopTabs() {
        const { router } = this.props;

        return (
            <nav 
                className="mt-5 flex-1 flex flex-col overflow-y-auto" 
                aria-label="Sidebar"
            >
                <div className="px-2 space-y-1">
                    {this.navigation.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                        >
                            <a
                            className={classNames(
                                item.href === router.pathname ? 'bg-[#FFE7FF] text-[#986A9E]' : 'text-white hover:text-white hover:bg-[#4BBDB7]',
                                'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                            )}
                            aria-current={item.href === router.pathname ? 'page' : undefined}
                            >
                                <item.icon className={classNames(item.href === router.pathname ? 'text-[#986A9E]' : 'text-white','mr-4 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
                                {item.name}
                            </a>
                        </Link>
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

export default withRouter(SidebarTabs);