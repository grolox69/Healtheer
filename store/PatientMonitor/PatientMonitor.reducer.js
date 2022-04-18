import {
    UPDATE_PATIENT_MONITOR,
    UPDATE_LOAD_STATUS
} from './PatientMonitor.action';

export const getInitialState = () => ({
    patient: {},
    isLoading: true
})

export default function PatientMonitorReducer(state = getInitialState(), action) {
    switch (action.type) {
        case UPDATE_PATIENT_MONITOR:
            return {
                ...state,
                patient: action.payload
            }
        case UPDATE_LOAD_STATUS:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    } 
}