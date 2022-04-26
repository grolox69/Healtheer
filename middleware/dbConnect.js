import mongoose from 'mongoose';
import { pusher } from '../lib/pusher';

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

async function mongooseConnectMiddleware(req, res, next) {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  }

  try {
    if (!global.mongoose) {
      const db = mongoose.connection;
      db.once('open', () => {
        console.log("-----Connected to DB-----");
        const patientDataCollection = db.collection('patientdatas');
        const changeStream = patientDataCollection.watch([], { fullDocument: 'updateLookup' });
        changeStream.on('change', (change) => {

          if(change.operationType === 'update') {
            const updatedData = change.fullDocument;
            pusher.trigger(
              'patientData',
              'data-update', 
              updatedData
            );
            console.log("update triggered")
          }
        });
      })
      
      global.mongoose = await mongoose.connect(MONGODB_URI, opts);
    }

  } catch(e) {
    console.error(e);
  }
  
  return next();
}

export default mongooseConnectMiddleware;