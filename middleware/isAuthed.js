import { getSession } from "next-auth/react"
import User from "../models/userModel"

async function isAuthed(req, res, next) {
    const session = await getSession({ req })

    if (session) {
        // Signed in
        try {
            const currentUser = await User.findById(session.user.id);
            req.userId = currentUser._id;
            return next();
        } catch(e) {
            res.status(500).json({ message: "Internal Server Error. Couldn't fetch User." });
        }
    } else {
        // Not Signed in
        res.status(401).json( { message: 'Unauthorized. Please sign in to continue.' } )
    }
}

export default isAuthed;