import { createHandler } from "../../../util/ConnectHandler/createHandler";
import isAuthed from "../../../middleware/isAuthed";

const handler = createHandler([isAuthed]);

handler
.get((req, res) => {
    console.log("Logged in User id", req.userId)
    res.json({msg: "get"})
})
.post((req, res) => {
    res.json({ msg: 'ADD NEW PATIENT' })
})

export default handler;