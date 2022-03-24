import { PureComponent, createRef } from 'react';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export class Modal extends PureComponent {

    state = {
        isOpen: true
    }

    cancelButtonRef = createRef();

    setIsOpen(isOpen) {
        this.setState({
            isOpen: isOpen
        })
    }

    renderModalBackground() {
        return <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    }

    renderModalBackgroundWithAnimation() {
        return (
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                { this.renderModalBackground() }
            </Transition.Child>
        )
    }

    renderCloseButton() {
        return (
            <button
                onClick={() => this.setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
                <XIcon className="block h-6 w-6" aria-hidden="true" />
            </button>
        )
    }

    renderModalContent() {
        const { children } = this.props;
        return children;
    }

    renderModal() {
        return (
            <div className="relative inline-block align-bottom max-h-[90vh] bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden overflow-y-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
                <div>
                    <div className='w-full flex justify-end'>
                        {this.renderCloseButton()}
                    </div>
                    {this.renderModalContent()}
                </div>
                
            </div>
        )
    }

    renderModalWithAnimation() {
        return (
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                {this.renderModal()}
            </Transition.Child>
        )
    }

    render() {
        const { isOpen } = this.state;

        return (
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={this.cancelButtonRef} onClose={() => this.setIsOpen(false)}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        {this.renderModalBackgroundWithAnimation()}
                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        {this.renderModalWithAnimation()}
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }
}

export default Modal;