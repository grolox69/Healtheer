import { createHandler } from "../../../util/ConnectHandler/createHandler";
import { updatePatientData } from "../../../controllers/patientDataController";

// @route /api/data/:id
// @desc Update Patient's Data
// @access Private

const handler = createHandler();

handler
.put(updatePatientData)

export default handler;