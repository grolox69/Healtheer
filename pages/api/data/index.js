import { createHandler } from "../../../util/ConnectHandler/createHandler";

const handler = createHandler();

handler
.post((req, res) => {
    console.log(req);
    res.json({ msg: 'Felefly byeklo'})
})