import PatientData from "../models/patientDataModel";

export const addPatientData = async (req, res) => {
}

export const updatePatientData = async (req, res) => {
    try {
        const patientData = await PatientData.findOneAndUpdate({patient: req.query.id}, req.body, { upsert: true, useFindAndModify: false, new: true });
        res.status(200).json({ patientData });
    } catch (e) {
        console.error("Failed to update patient data.", e.stack);
        res.status(500).send("Failed to update patient data.");
    }
}