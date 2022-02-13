import { PureComponent } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import BrandLogo from '../BrandLogo';
import SidebarTabs from '../SidebarTabs';
import SidebarCloseButton from '../SidebarCloseButton';
import LogoutButton from '../LogoutButton';

export class Sidebar extends PureComponent {

    renderMobileSideBar() {
        const { closeMobileSidebar, sidebarOpen } = this.props;

        return (
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={closeMobileSidebar}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[#643A6A] pt-3 pb-4 ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <SidebarCloseButton/>
                                </div>
                            </Transition.Child>
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <BrandLogo />
                                <SidebarTabs isMobile={true} />
                            </div>
                            <LogoutButton />
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }

    renderDesktopSidebar() {
        return (
            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                <div className="flex flex-col flex-grow bg-[#643A6A] pb-4 overflow-y-auto">
                    <BrandLogo/>
                    <SidebarTabs isMobile={false} />
                    <LogoutButton />
                </div>
            </div>
        )
    }

    render() {
        
        return (
            <>
                {this.renderMobileSideBar()}
                {this.renderDesktopSidebar()}
            </>
        )
    }
}

export default Sidebar;