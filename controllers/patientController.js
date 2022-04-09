import User from "../models/userModel"
import Patient from "../models/patientModel"

export const getPatients = async (req, res) => {
    try {
        const currentUser = await User.findById(req.userId).populate("patients");
        res.json({ patients: currentUser.patients });
    } catch (e) {
        console.error("Could not fetch patients. ", e.stack);
        res.status(500).send("Could not fetch patients.");
    }
}

export const addPatient = async (req, res) => {
    const body = req.body;
    body.doctors = [req.userId];
    const newPatient = new Patient(body);
    newPatient.save().then(() => {
        User.findById(req.userId).then((user) => {
            user.patients.push(newPatient._id);
            user.save().then(() => {
                res.status(200).send("Patient Successfully added.");
            })
        });
    }).catch((e) => {
        console.error("Couldn't add Patient. ", e.stack)
        res.status(400).send("Failed to add patient");
    })
}