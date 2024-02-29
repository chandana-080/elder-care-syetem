const exp=require("express")
const userApp=exp.Router()

const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')      

const multerObj=require('./Middleware/cloudinaryConfig')
const { request } = require("http")


userApp.get('/get-users',expressAsyncHandler(async(request,response)=>{
const userCollectionObj=request.app.get("userCollectionObj")
let usersList=userCollectionObj.find().toArray()
response.status(201).send({message:"all users",payload:usersList})
}))

userApp.get('get-user/:username',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get("userCollectionObj")
    let usernameFromUrl=request.params.username 
    let userOfDB=await userCollectionObj.findOne({"username":{$eq:usernameFromUrl}})
    if(userOfDB===null){
        response.status(200).send({message:"user not found"})
    }
    else{
        delete userOfDB.password
        response.status(201).send({message:"user",payload:userOfDB})
    }
}))


userApp.use(exp.json())
userApp.post('/create-user',multerObj.single("photo"),expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get('userCollectionObj')
    let newUser=JSON.parse(request.body.user)
    console.log("Received request body",newUser)

    const userOfDB=await userCollectionObj.findOne({username:newUser.username})
    if (userOfDB!==null){
        response.status(200).send({message:"user already exists"})
    }
    else{
    newUser.image=request.file.path;
    let hashedPassword=await bcryptjs.hash(newUser.password,5)
    newUser.password=hashedPassword
    await userCollectionObj.insertOne(newUser)
    response.status(201).send({message:"user created"})
    }
}))

userApp.post('/user-login',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=userApp.app.get('userCollectionObj')
    const userCredentials=request.body
    const userOfDB=await userCollectionObj.findOne({username:userCredentials.username})
    if(userOfDB===null){
        response.status(200).send({message:"invalid user login"})
    }
    else{
        let isValidPassword=await bcryptjs.compare(userCredentials.password,userOfDB.password)
        if(isValidPassword===false){
            response.status(200).send({message:"invalid password"})
        }
        else{
            let jwtToken=jwt.sign({username:userOfDB.username})
            delete userOfDB.password
            response.send({message:"success",token:jwtToken})
            
        }
    }    
}))

userApp.delete('/delete-user/:id',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get('userCollectionObj')
    let userId=(+request.params.id)
    await userCollectionObj.deleteOne({id:userId})
    response.status(201).send({message:"user deleted"})
}))



module.exports=userApp