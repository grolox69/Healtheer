import nc from 'next-connect'

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Internal server error. Please try again later!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page not found");
    },
})
.get((req, res) => {
    res.json({ msg: 'GET PATIENT' })
})
.patch((req, res) => {
    res.json({ msg: 'UPDATE PATIENT' })
})
.delete((req, res) => {
    res.json({ msg: 'DELETE PATIENT' })
})

export default handler