import { PureComponent } from "react";
import PatientCard from "../PatientCard";
import SimpleLoader from "../SimpleLoader"

export class PatientsGrid extends PureComponent {

    renderLoading() {
        return <SimpleLoader />
    }

    renderNoPatients() {
        return (
            <span className="text-lg font-normal">
                You currently dont have any patient to monitor. Please search or add your patients
            </span>
        )
    }

    renderPatients() {
        const { patients } = this.props;

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
        const { patients, isLoading } = this.props
        
        if (isLoading) {
            return this.renderLoading();
        }

        if (patients === undefined || patients.length == 0 && !isLoading) {
            return this.renderNoPatients();
        }

        return this.renderPatientsGrid();
    }
}

export default PatientsGrid;
