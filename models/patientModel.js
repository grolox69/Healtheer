import mongoose from "mongoose";

export const addressSchema = new mongoose.Schema({
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
})

export const patientSchema = mongoose.Schema({
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
    }
})

console.log("models", mongoose.models);

const Patient = mongoose.models.Patient || mongoose.model("Patient", patientSchema);

export default Patient;