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
                user.populate('patients').then((currentUser) => {
                    res.status(200).json({ patients: currentUser.patients });
                })
            })
        });
    }).catch((e) => {
        console.error("Couldn't add Patient. ", e.stack)
        res.status(500).send("Failed to add patient");
    })
}

export const deletePatient = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.userId, {$pull: {patients: req.query.id}}, {new: true}).populate('patients');
        await Patient.findByIdAndDelete(req.query.id);
        res.status(200).json({ patients: updatedUser.patients });
    } catch (e) {
        console.error("Failed to delete patient ", e.stack);
        res.status(500).send("Failed to delete patient.")
    }
}

export const getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.query.id);
        res.status(200).json({ patient });
    } catch (e) {
        console.error("Failed to fetch patient ", e.stack);
        res.status(500).send("Failed to fetch patient.")
    }
}