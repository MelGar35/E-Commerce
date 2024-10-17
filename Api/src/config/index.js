//db mongo
const dotenv = require("dotenv")
dotenv.config()
const{MongoClient} = require("mongodb")

const client = new MongoClient(process.env.MONGO_URL)

async function connectToMongoDB(){
    try {
      await client.connect()
      console.log("Connected to Mongo Db");
      return client
    } catch (error) {
      console.log("Error trying to Connect Mongo Db");
      return null
    }
}

async function disconnectToMongoDB() {
    try {
        await client.close()
        console.log("Disconnected from MongoDb");
    } catch (error) {
        console.log("Error trying to disconnect Mongo Db", error);
    }
}

module.exports= {connectToMongoDB, disconnectToMongoDB}

