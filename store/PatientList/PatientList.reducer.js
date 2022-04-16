import {
    UPDATE_PATIENT_LIST,
    UPDATE_LOAD_STATUS
} from './PatientList.action';

export const getInitialState = () => ({
    patients: [],
    isLoading: true
})

export default function PatientListReducer(state = getInitialState(), action) {
    switch (action.type) {
        case UPDATE_PATIENT_LIST:
            return {
                ...state,
                patients: action.payload
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