import { PureComponent } from "react";
import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'

export class NotificationOverlay extends PureComponent {

    renderCloseButton() {

    }

    renderTitle() {
        return (
            <></>
        )
    }

    renderMessage() {
        return (
            <></>
        )
    }

    renderIcon() {
        return (
            <></>
        )
    }
    
    render() {
        const show = true;
        const setShow = () => {}
        return (
            <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
              aria-live="assertive"
              className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
              <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                  {/* TOAST */}
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="p-4">
                    <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
                        <p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                        <button
                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                            setShow(false)
                        }}
                        >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                {/* TOAST END */}
              </div>
            </div>
          </>
        )
    }
}

export default NotificationOverlay;