import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    updateLoadStatus,
    updatePatientList
} from '../../store/PatientList/PatientList.action';
import baseUrl from '../../util/baseUrl'

import PatientsPage from './PatientsPage.component';


export const mapStateToProps = (state) => ({
    
});

/** @namespace Route/CartPage/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    updatePatientsList: (patients) => dispatch(updatePatientList(patients)),
    updateLoadStatus: (status) => dispatch(updateLoadStatus(status))
});

export class PatientsPageContainer extends PureComponent {

    async componentDidMount() {
        const { updatePatientsList, updateLoadStatus } = this.props;

        const response = await fetch(`${baseUrl}/api/patients`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })

        const data = await response.json()
        updatePatientsList(data.patients)
        updateLoadStatus(false)
    }

    render() {
        return <PatientsPage/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsPageContainer);