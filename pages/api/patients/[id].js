import { createHandler } from "../../../util/ConnectHandler/createHandler";
import isAuthed from "../../../middleware/isAuthed";

import { 
    deletePatient,
    getPatient
} from "../../../controllers/patientController"

// @route /api/patients/:id
// @desc GET, UPDATE, DELETE patient
// @access Private

const handler = createHandler([isAuthed]);

handler
.get(getPatient)
.post((req, res) => {
    console.log("POST /api/patients/:id - not implemented")
})
.delete(deletePatient)

export default handler;