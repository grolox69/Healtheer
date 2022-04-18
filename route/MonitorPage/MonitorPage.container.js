import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import {
    updateLoadStatus,
    updatePatientMonitor
} from '../../store/PatientMonitor/PatientMonitor.action';

import MonitorPage from './MonitorPage.component';

export const mapStateToProps = (state) => ({
    
});

export const mapDispatchToProps = (dispatch) => ({
    updatePatientMonitor: (patient) => dispatch(updatePatientMonitor(patient)),
    updateLoadStatus: (status) => dispatch(updateLoadStatus(status))
});

export class MonitorPageContainer extends PureComponent {

    async componentDidMount() {
        const { updatePatientMonitor, updateLoadStatus, router } = this.props;

        const { patientId } = router.query;
        
        updateLoadStatus(true);

        const response = await fetch(`/api/patients/${patientId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })

        const data = await response.json();
        updatePatientMonitor(data.patient);
        updateLoadStatus(false);
    }

    render() {
        return <MonitorPage />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MonitorPageContainer));