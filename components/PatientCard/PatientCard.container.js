import { PureComponent } from "react";
import { connect } from 'react-redux';
import {
    updateLoadStatus,
    updatePatientList
} from '../../store/PatientList/PatientList.action';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import PatientCard from "./PatientCard.component";

export const mapStateToProps = (state) => ({
    
})

export const mapDispatchToProps = (dispatch) => ({
    updatePatientList: (patients) => dispatch(updatePatientList(patients)),
    updateLoadStatus: (status) => dispatch(updateLoadStatus(status))
})

export class PatientCardContainer extends PureComponent {

    containerFunctions = {
        deletePatient: this.deletePatient.bind(this),
        submitDelete: this.submitDelete.bind(this)
    }

    async deletePatient(id) {
        const { 
            updatePatientList, 
            updateLoadStatus, 
        } = this.props;

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

    submitDelete(id) {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this patient.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.deletePatient(id)
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
        });

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