import { MongoClient } from "mongodb";

export async function getStaticProps() {

    const client = await MongoClient.connect(
        process.env.MONGO_URI,  { useNewUrlParser: true }
    );
  
    const db = client.db();
  
    const yourCollection = db.collection("stock");
  
  
    const yourData = await yourCollection.find().toArray();
  
    client.close();
  
    return {
      props: data
    };
  }