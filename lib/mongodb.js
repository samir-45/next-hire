import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define MONGODB_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName: "nexthire" // add this line
    }).then(async (mongooseInstance) => {
      const dbName = mongooseInstance.connection.db.databaseName;
      console.log("MongoDB connected to database:", dbName);

      // List all collections in this database
      const collections = await mongooseInstance.connection.db.listCollections().toArray();
      console.log("Collections in database:", collections.map(c => c.name));

      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
