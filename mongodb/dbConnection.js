
const { MongoClient } = require('mongodb');
let dbConnectionurl = 'mongodb://localhost:27017'

const client = new MongoClient(dbConnectionurl);

let dbConnection = async() =>{
    await client.connect();
   let db=  client.db("mongodb_project")
   return db


}
module.exports