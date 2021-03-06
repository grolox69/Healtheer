import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/Modal/Modal.action';
import {
    updateLoadStatus,
    updatePatientList
} from '../../store/PatientList/PatientList.action';
import { toast } from 'react-toastify';

import PatientForm from './PatientForm.component';

export const mapStateToProps = (state) => ({
    modalOpen: state.ModalReducer.modalOpen,
})

export const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal(false)),
    updatePatientList: (patients) => dispatch(updatePatientList(patients)),
    updateLoadStatus: (status) => dispatch(updateLoadStatus(status))
})

export class PatientFormContainer extends PureComponent {

    containerFunctions = {
        onSubmit: this.onSubmit.bind(this),
    };

    containerProps() {
        return { ...this.props }
    }

    async onSubmit(data) {
        const { 
            updatePatientList, 
            updateLoadStatus,
            closeModal 
        } = this.props;

        closeModal();

        const { country, city, street, appartment, ...info } = data;

        const patientInfo = {
            ...info,
            address: {
                country,
                city, 
                
            }
        }

        street && (patientInfo.address.street = street)
        street && (patientInfo.address.appartment = appartment)

        try {
            updateLoadStatus(true);
            const response = await fetch("/api/patients", {
                body: JSON.stringify(patientInfo),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            })
            if (response.ok) {
                const data = await response.json()
                updatePatientList(data.patients);
                toast.success('Patient Added!');
                updateLoadStatus(false);
            } else {
                toast.error('Failed to add patient!');
                updateLoadStatus(false);
            }

        } catch(e) {
            console.error("failed to fetch.", e.stack);
        }
    }

    render() {
        return (
            <PatientForm
                { ...this.containerProps() }
                { ...this.containerFunctions }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientFormContainer);
