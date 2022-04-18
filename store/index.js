import { combineReducers } from 'redux';
import SidebarReducer from './Sidebar/Sidebar.reducer';
import ModalReducer from './Modal/Modal.reducer';
import PatientListReducer from './PatientList/PatientList.reducer';
import PatientMonitorReducer from './PatientMonitor/PatientMonitor.reducer'

export default combineReducers({
    SidebarReducer,
    ModalReducer,
    PatientListReducer,
    PatientMonitorReducer
});