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

    onSubmit(data) {
        console.log(data)
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
