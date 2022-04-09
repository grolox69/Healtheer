import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import { PureComponent } from 'react';

import PatientForm from './PatientForm.component';

export const mapStateToProps = (state) => ({
    
});

export const mapDispatchToProps = (dispatch) => ({
    
});

export class PatientFormContainer extends PureComponent {

    containerFunctions = {
        onSubmit: this.onSubmit.bind(this),
    };

    containerProps() {
        return {...this.props}
    }

    async onSubmit(data) {
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
        console.log(patientInfo)

        try {
            const res = await fetch("/api/patients", {
                body: JSON.stringify(patientInfo),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            })

            if (res.ok) {
                console.log("ok", res)
            } else {
                console.log(res)
            }

        } catch(e) {
            console.error("failed to fetch.");
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

export default PatientFormContainer;
