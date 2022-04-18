export const UPDATE_PATIENT_MONITOR = 'UPDATE_PATIENT_MONITOR';
export const UPDATE_LOAD_STATUS = 'UPDATE_LOAD_STATUS';


export const updateLoadStatus = (status) => {
    return {
        type: 'UPDATE_LOAD_STATUS',
        payload: status
    }
}

export const updatePatientMonitor = (patient) => {
    return {
        type: 'UPDATE_PATIENT_MONITOR',
        payload: patient
    }
}