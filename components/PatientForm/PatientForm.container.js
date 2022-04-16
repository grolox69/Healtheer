import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/Modal/Modal.action';
import {
    updateLoadStatus,
    updatePatientList
} from '../../store/PatientList/PatientList.action';

import PatientForm from './PatientForm.component';

export const mapStateToProps = (state) => ({
    modalOpen: state.ModalReducer.modalOpen,
})

export const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal(false)),
    updatePatientsList: (patients) => dispatch(updatePatientList(patients)),
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
            updatePatientsList, 
            updateLoadStatus,
            closeModal 
        } = this.props;

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
            const response = await fetch("/api/patients", {
                body: JSON.stringify(patientInfo),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            })
            updateLoadStatus(true);
            if (response.ok) {
                const data = await response.json()
                updatePatientsList(data.patients);
                closeModal();
                updateLoadStatus(false);
            } else {
                console.log(response)
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
