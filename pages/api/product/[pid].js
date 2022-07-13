// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

// export async function getStaticProps() {

//     const client = await MongoClient.connect(
//         process.env.MONGO_URI,  { useNewUrlParser: true }
//     );
  
//     const db = client.db();
  
//     const yourCollection = db.collection("stock");
  
  
//     const yourData = await yourCollection.find().toArray();
  
//     client.close();
  
//     return {
//       props: yourData
//     };
//   }

export default async function handler(req, res) {
  let { pid } = req.query;
  pid = Number(pid);
  
  const client = await MongoClient.connect(
    process.env.MONGODB_URI,  { useNewUrlParser: true }
);


const db = client.db('products');


const yourCollection = db.collection("stock");


const yourData = await yourCollection.find({id: pid}).toArray();


client.close();

res.status(200).json(yourData);
}
