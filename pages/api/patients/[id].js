import { createHandler } from "../../../util/ConnectHandler/createHandler";
import isAuthed from "../../../middleware/isAuthed";

import { 
    deletePatient
} from "../../../controllers/patientController"

// @route /api/patients/:id
// @desc GET, UPDATE, DELETE patient
// @access Private

const handler = createHandler([isAuthed]);

handler
.get((req, res) => {
    
})
.post((req, res) => {
})
.delete(deletePatient)

export default handler;