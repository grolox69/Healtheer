import { PureComponent } from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import withSession from '../../util/Auth/withSession'
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export class ProfileDropdown extends PureComponent {

    renderMenuButton() {
        const { data: session } = this.props.session;
        return (
            <>
                <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#643A6A] lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                    <Image
                        className="h-8 w-8 rounded-full"
                        src={session.user.image}
                        alt="User Profile Image"
                        width='32px'
                        height='32px'
                    />
                    <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                        <span className="sr-only">Open user menu for </span>{session.user.name}
                    </span>
                    <ChevronDownIcon
                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </>
        )
    }

    renderMenuItems() {
        return (
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                            Profile
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <button
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-left text-gray-700 w-full')}
                            onClick={() => signOut({ callbackUrl: '/' })}
                        >
                            Logout
                        </button>
                    )}
                </Menu.Item>
            </Menu.Items>
        )
    }

    render() {
        
        return (
            <Menu as="div" className="ml-3 relative">
                <div>
                    {this.renderMenuButton()}
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    {this.renderMenuItems()}
                </Transition>
            </Menu>
        )
    }
}

export default withSession(ProfileDropdown);