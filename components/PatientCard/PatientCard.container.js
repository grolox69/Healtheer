import { PureComponent } from "react";
import { connect } from 'react-redux';
import {
    updateLoadStatus,
    updatePatientList
} from '../../store/PatientList/PatientList.action';
import { toast } from 'react-toastify';

import PatientCard from "./PatientCard.component";

export const mapStateToProps = (state) => ({
    
})

export const mapDispatchToProps = (dispatch) => ({
    updatePatientList: (patients) => dispatch(updatePatientList(patients)),
    updateLoadStatus: (status) => dispatch(updateLoadStatus(status))
})

export class PatientCardContainer extends PureComponent {

    containerFunctions = {
        deletePatient: this.deletePatient.bind(this)
    }

    async deletePatient(id) {
        const { 
            updatePatientList, 
            updateLoadStatus, 
        } = this.props;

        if (window.confirm('Are you sure you want to delete this patient?')) {
            updateLoadStatus(true);
            const response = await fetch(`/api/patients/${id}`,{
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
            console.log(response)
            if (response.ok) {
                const data = await response.json()
                console.log("done ", data.patients)
                updatePatientList(data.patients);
                updateLoadStatus(false);
                toast.success('Patient Removed!');
            } else {
                console.log(response);
                toast.error('Failed to remove patient!');
            }
        }
    }

    render() {
        return (
            <PatientCard 
                { ...this.containerFunctions }
                { ...this.props }
            />
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PatientCardContainer);