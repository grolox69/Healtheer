import { PureComponent } from "react";
import { PencilAltIcon } from '@heroicons/react/solid'
import { TrashIcon, LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";

export class PatientCard extends PureComponent {

    renderPatientDetails() {
        const { patient } = this.props;

        return (
            <div className="flex-1 flex flex-col p-8">
                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={patient.imageUrl} alt="" />
                <h3 className="mt-6 text-gray-900 text-sm font-medium">{patient.name}</h3>
                <div className="mt-1 flex-grow flex flex-col justify-between space-y-2">
                    <p className="flex items-center justify-center text-gray-500 text-sm"><LocationMarkerIcon className="h-4 w-4 mr-1" />Beirut, Mansourieh</p>
                    <p className="flex items-center justify-center text-gray-500 text-sm"><CalendarIcon className="h-4 w-4 mr-1"/>27 March, 2000 (22 years)</p>
                    <div className="mt-3" />
                
                </div>
            </div>
        )
    }

    renderEditButton() {
        return (
            <div className="w-0 flex-1 flex">
                <a
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center hover:cursor-pointer py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                    <PencilAltIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Edit</span>
                </a>
            </div>
        )
    }

    renderDeleteButton() {
        return (
            <div className="-ml-px w-0 flex-1 flex">
                <a
                    className="relative w-0 flex-1 inline-flex items-center justify-center hover:cursor-pointer py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                    <TrashIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Delete</span>
                </a>
            </div>
        )
    }

    renderActionButtons() {
        return (
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                    {this.renderEditButton()}
                    {this.renderDeleteButton()}
                </div>
            </div>
        )
    }

    render() {
        return ( 
            <div
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            >
                {this.renderPatientDetails()}
                {this.renderActionButtons()}
            </div>
        )
    }
}

export default PatientCard