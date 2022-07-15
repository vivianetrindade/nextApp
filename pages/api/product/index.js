import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    
    const client = await MongoClient.connect(
      process.env.MONGODB_URI,  { useNewUrlParser: true }
  );
  
  const db = client.db('products');
  
  const yourCollection = db.collection("stock");
  
  const yourData = await yourCollection.find().toArray();
  client.close();
  
  res.status(200).json(yourData);
  }