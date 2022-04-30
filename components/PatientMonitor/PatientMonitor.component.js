import { PureComponent } from "react";
import { sensorsMap } from "./PatientMonitor.config";
import MonitorCard from '../MonitorCard';
import SimpleLoader from '../SimpleLoader';


function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export class PatientMonitor extends PureComponent {

  renderLoading() {
    return <SimpleLoader />
  }

  renderHeader() {
    const { patient } = this.props;

    return (
      <section aria-labelledby="profile-overview-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img className="mx-auto h-20 w-20 rounded-full" src={`https://avatars.dicebear.com/api/micah/${patient._id}.svg`} alt="" />
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left mb-4 md:mb-0">
                  <p className="text-2xl font-bold text-gray-900">Patient</p>
                  <p className="md:text-4xl font-medium text-gray-600 text-3xl">{patient.fullName}</p>
                </div>
              </div>
              <div className="grid text-center md:text-left md:border-l-2 pl-8">
                <div className="text-lg font-semibold">
                  Age : 
                  <span className="text-md font-thin text-gray-500 ml-2">{_calculateAge(new Date(patient.dateOfBirth))} years old</span>
                </div>
                <div className="text-lg font-semibold">
                  Gender: 
                  <span className="text-md font-thin text-gray-500 ml-2">{ patient.gender }</span>
                </div>
                <div className="text-lg font-semibold">
                  Emergency Email: 
                  <span className="text-md font-thin text-gray-500 ml-2"><a href={`mailto:${patient.emergencyEmail}`}>{ patient.emergencyEmail }</a></span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    )
  }

  renderAddress() {
    const { patient: { address }} = this.props

    return (
      <section aria-labelledby="announcements-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-700 text-center" id="announcements-title">
              Personal Address
            </h2>
            <div className="flow-root mt-4">
              <span className="text-xl font-semibold">Country</span>
              <div className="text-md text-gray-500 mb-2">{ address.country }</div>
              <span className="text-xl font-semibold">City</span>
              <div className="text-md text-gray-500 mb-2">{ address.city }</div>
              <span className="text-xl font-semibold">Street</span>
              <div className="text-md text-gray-500 mb-2">{ address.street || 'Unspecified' }</div>
              <span className="text-xl font-semibold">Appartment</span>
              <div className="text-md text-gray-500 mb-2">{ address.appartment || 'Unspecified' }</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  renderMonitorCards() {
    const { data } = this.props;
    return (
      <>
        { sensorsMap.map((sensor, i) => (
          <MonitorCard key={i} sensor={sensor} data={data} />
        ))}
      </>
    )
  }

  renderComingSoon() {
    return (
      <div className="flex h-16 items-center justify-center rounded-lg bg-white overflow-hidden shadow">
        <span className="text-xl font-thin">
          Coming Soon.
        </span>
      </div>
    )
  }
    
  render() {
    const { isLoading } = this.props
        
    if (isLoading) {
      return this.renderLoading();
    }
    return (     
        <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            { this.renderHeader() }
            { this.renderMonitorCards() }
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4"> 
            { this.renderAddress() }
            { this.renderComingSoon() }
            </div>
        </div>
    );
  }
}

export default PatientMonitor;