import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.ah9aw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// A function to create and reuse a MongoClient connection.
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global MongoClient instance
  // so the MongoClient is not constantly re-instantiated during hot reloading.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's safe to always create a new MongoClient instance
  clientPromise = client.connect();
}

export default clientPromise;
