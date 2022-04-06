import mongoose from 'mongoose';

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
      global.mongoose = await mongoose.connect(MONGODB_URI, opts);
      console.log("-----Connected to DB-----");
    }

  } catch(e) {
    console.error(e);
  }
  
  return next();
}

export default mongooseConnectMiddleware;