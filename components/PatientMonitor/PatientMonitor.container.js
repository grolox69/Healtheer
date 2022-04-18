import { PureComponent } from 'react';
import { connect } from 'react-redux';

import PatientMonitor from './PatientMonitor.component';

export const mapStateToProps = (state) => ({
    patient: state.PatientMonitorReducer.patient,
    isLoading: state.PatientMonitorReducer.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
    
});

export class PatientsPageContainer extends PureComponent {

    render() {
        return <PatientMonitor { ...this.props } />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsPageContainer);