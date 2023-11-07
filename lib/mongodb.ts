import { MongoClient, Db } from 'mongodb';
const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.cupojqx.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

export const connectToDatabase = async () => await MongoClient.connect(connectionString);

export const insertDocument = async (db: Db, collection: string, document: any) => await db.collection(collection).insertOne(document);