// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  let { pid } = req.query;
  pid = Number(pid);
  // const { method } = request;
  
  const client = await MongoClient.connect(
    process.env.MONGODB_URI,  { useNewUrlParser: true }
  );


const db = client.db('products');


const yourCollection = db.collection("stock");



if(req.method === 'GET') {
  const yourData = await yourCollection.find({id: pid}).toArray();
  console.log(yourData, "this is yourData");
  client.close();
  res.status(200).json(yourData);
}
if(req.method === 'POST') {
  const yourData = await yourCollection.findOneAndUpdate({id: pid}, {$inc: {productQuantity: -1}});
  console.log(yourData, "this is your data");
  client.close();
  res.status(201).json(yourData);
}
}
