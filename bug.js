```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('mycollection');

    // Incorrectly using updateOne without upsert:true 
    const result = await collection.updateOne({name: 'John'}, {$set: {age: 30}});

    console.log(`Modified ${result.modifiedCount} document(s).`);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```