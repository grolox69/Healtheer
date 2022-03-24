import { PureComponent } from "react";
import Image from "next/image";

export class DashboardHeading extends PureComponent {
    render() {
        const { name, imageUrl } = this.props;

        return (
            <div className="rounded-lg bg-white overflow-hidden shadow">
                <h2 className="sr-only" id="profile-overview-title">
                    Profile Overview
                </h2>
                <div className="bg-white p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                            <div className="flex flex-shrink-0 justify-center">
                                <Image 
                                    className="mx-auto h-20 w-20 rounded-full" 
                                    src={imageUrl} 
                                    alt="Profile Image" 
                                    width="80px"
                                    height="80px"
                                />
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">{name}</p>
                            <p className="text-sm font-medium text-gray-600">Emergency Physician</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center sm:mt-0">
                        <div
                        href="#"
                        className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                        View profile
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default DashboardHeading