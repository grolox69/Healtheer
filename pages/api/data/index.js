import { createHandler } from "../../../util/ConnectHandler/createHandler";

// @route /api/data
// @desc GET arduino's data
// @access Private

const handler = createHandler();

handler
.post((req, res) => {
    // Add data to DB using PatientModel Schema
    res.json({ msg: 'Felefly byeklo'})
})

export default handler;