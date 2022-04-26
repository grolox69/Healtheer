import Pusher from 'pusher';

const creds = {
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
}

console.log(creds)

export const pusher = new Pusher(creds);