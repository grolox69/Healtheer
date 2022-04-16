export const UPDATE_PATIENT_LIST = 'UPDATE_PATIENT_LIST';
export const UPDATE_LOAD_STATUS = 'UPDATE_LOAD_STATUS';


export const updateLoadStatus = (status) => {
    return {
        type: 'UPDATE_LOAD_STATUS',
        payload: status
    }
}

export const updatePatientList = (patientList) => {
    return {
        type: 'UPDATE_PATIENT_LIST',
        payload: patientList
    }
}