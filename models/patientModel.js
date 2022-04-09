import mongoose, { Schema } from "mongoose";

export const addressSchema = {
    _id : {
        id: false
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String
    },
    appartment: {
        type: String
    }
}

export const patientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    emergencyEmail: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: addressSchema
    },
    doctors: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Patient = mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export default Patient;