const exp=require("express")
const app=exp()
app.listen(3500,()=>console.log("server is listening on port 3500"))

const mclient=require("mongodb").MongoClient
mclient.connect('mongodb://127.0.0.1:27017').then((dbRef)=>{
    const dbObj=dbRef.db('eldercaresystem')
    const userCollectionObj=dbObj.collection('userCollection')
    app.set('userCollectionObj',userCollectionObj)
    console.log("Database connection successful")
}).catch(err=>console.log("err is",err))





const userApp=require("./APIs/userApi")
app.use('/user-api',userApp)

const productApp=require("./APIs/productApi")
app.use('/product-api',productApp)

