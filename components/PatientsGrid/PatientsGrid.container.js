import { PureComponent } from 'react';
import { connect } from 'react-redux';

import PatientsGrid from './PatientsGrid.component';

export const mapStateToProps = (state) => ({
    patients: state.PatientListReducer.patients,
    isLoading: state.PatientListReducer.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
    
})

export class PatientsGridContainer extends PureComponent {
    render() {
        return <PatientsGrid { ...this.props } />
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsGridContainer);