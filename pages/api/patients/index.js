import { createHandler } from "../../../util/ConnectHandler/createHandler";
import isAuthed from "../../../middleware/isAuthed";

import { 
    getPatients,
    addPatient
} from "../../../controllers/patientController"

// @route /api/patients
// @desc GET user's patients
// @access Private

const handler = createHandler([isAuthed]);

handler
.get(getPatients)
.post(addPatient)

export default handler;