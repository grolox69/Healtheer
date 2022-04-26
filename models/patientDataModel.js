import mongoose, { Schema } from "mongoose";

export const patientDataSchema =  new mongoose.Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    health: {
        type: Number,
        required: true
    }
})

const PatientData = mongoose.models.PatientData || mongoose.model("PatientData", patientDataSchema);

export default PatientData;