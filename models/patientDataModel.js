import mongoose, { Schema } from "mongoose";

export const patientDataSchema =  new mongoose.Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    bodyTemperature: {
        type: Number,
        required: true
    },
    roomTemperature: {
        type: Number,
        required: true
    },
    heartRate: {
        type: Number,
        required: true
    },
    alarmFlag: {
        type: Number,
        required: true
    }
})

const PatientData = mongoose.models.PatientData || mongoose.model("PatientData", patientDataSchema);

export default PatientData;