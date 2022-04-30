import { PureComponent } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';

import PatientMonitor from './PatientMonitor.component';

export const mapStateToProps = (state) => ({
    patient: state.PatientMonitorReducer.patient,
    isLoading: state.PatientMonitorReducer.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
    
});

export class PatientsPageContainer extends PureComponent {

    state = {
        data: 'Device not connected'
    }

    componentDidMount() {
        try {
            this.pusher = new Pusher("1857cd97490670e37af0", {
                cluster: "ap2",
            });
            this.channel = this.pusher.subscribe('patientData');
            this.channel.bind('data-update', (e) => this.updateData(e));
        } catch(e) {
            console.log(e)
        }
    }

    updateData(newData) {
        this.setState({
            data: newData
        })
    }

    render() {
        return <PatientMonitor { ...this.props } { ...this.state } />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsPageContainer);