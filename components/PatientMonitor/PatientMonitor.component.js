import { PureComponent } from "react";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import SimpleLoader from "../SimpleLoader"

const actions = [
  {
    icon: ClockIcon,
    name: 'Request time off',
    href: '#',
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    icon: BadgeCheckIcon,
    name: 'Benefits',
    href: '#',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    icon: UsersIcon,
    name: 'Schedule a one-on-one',
    href: '#',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  { icon: CashIcon, name: 'Payroll', href: '#', iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50' },
  {
    icon: ReceiptRefundIcon,
    name: 'Submit an expense',
    href: '#',
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    icon: AcademicCapIcon,
    name: 'Training',
    href: '#',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
    return (
      <section aria-labelledby="quick-links-title">
        <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          <h2 className="sr-only" id="quick-links-title">
            Quick links
          </h2>
          {actions.map((action, actionIdx) => (
            <div
              key={action.name}
              className={classNames(
                actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href={action.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at
                  blanditiis et quo et molestiae.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>
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