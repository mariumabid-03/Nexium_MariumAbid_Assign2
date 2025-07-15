import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

// ⛑️ Extend the global object to include our custom client promise
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ✅ Ensure clientPromise is declared after setting it properly
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;