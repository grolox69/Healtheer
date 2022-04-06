import nc from "next-connect";
import mongooseConnectMiddleware from "../../middleware/dbConnect";

export function createHandler(...middleware) {
    return nc({
        onError: (err, req, res, next) => {
            console.error(err.stack);
            res.status(500).end("Internal server error. Please try again later!");
        },
        onNoMatch: (req, res) => {
            res.status(404).end("Page not found");
        },
    })
    .use(mongooseConnectMiddleware, ...middleware);
}