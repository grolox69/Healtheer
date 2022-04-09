import { PureComponent } from "react";
import PatientCard from "../PatientCard";

const patientsTest = [
    {
      name: 'Jane Cooper',
      title: 'Paradigm Representative',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    
]

export class PatientsGrid extends PureComponent {

    renderNoPatients() {
        return (
            <span className="text-lg font-normal">
                You currently dont have any patient to monitor. Please search or add your patients
            </span>
        )
    }

    renderPatients() {
        const { patients } = this.props
        console.log(patients)
        return (
            patients.map((patient, id) => {
                return (
                    <PatientCard key={id} patient={patient} />
                )
            })
        )
    }

    renderPatientsGrid() {
        return (
            <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                { this.renderPatients() }
            </div>
        )
    }

    render() {
        const { patients } = this.props

        if (patients === undefined || patients.length == 0) {
            return this.renderNoPatients()
        }

        return this.renderPatientsGrid()
    }
}

export default PatientsGrid;
