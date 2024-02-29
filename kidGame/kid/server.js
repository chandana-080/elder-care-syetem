const exp=require('express');
const app=exp();

let cors=require('cors')
app.use(cors())

app.listen(3500,()=>{
    console.log("server is listening on port number 3500");
})

const path=require("path");
app.use(exp.static(path.join(__dirname,'./build')))

const mclient=require('mongodb').MongoClient;
mclient.connect('mongodb://127.0.0.1:27017').then((dbRef)=>{
    const dbObj=dbRef.db('chandana');
    const kidsCollectionObj=dbObj.collection('userCollection')
    app.set("kidsCollectionObj",kidsCollectionObj)
    console.log("database connection is successful")
})

