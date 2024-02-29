const exp=require('express');
const userApp=exp.Router();
const expressAsyncHandler=require('require-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')


userApp.get('/get-users',expressAsyncHandler(async(request,response)=>{
const kidsCollectionObj=request.app.get("kidsCollectionObj")

let usersList=await kidsCollectionObj.find().toArray()
response.status(201).send({message:"all users",payload:usersList})
}));



userApp.get("/get-user/:username",expressAsyncHandler(async(request,response)=>{
    const kidsCollectionObj=request.app.get("kidsCollectionObj")

    let usernameFromUrl=request.params.username
    let userOfDb=await kidsCollectionObj.findOne({username:usernameFromUrl})
    if(userOfDb===null){
        response.status(201).send({message:"user not found"})
    }
    else{
        delete userOfDb.password
        response.status(201).send({message:"user",payload:userOfDb})
    }
}))


userApp.use(exp.json())
userApp.post('/create-user',expressAsyncHandler(async(request,response)=>{
    const kidsCollectionObj=request.app.get("kidsCollectionObj")
    const newUser=JSON.parse(request.body.user);
    console.log("received request body: ",newUser)

    const userOfDb=await kidsCollectionObj.findOne({username:newUser.username})
    console.log(userOfDb)
    if(userOfDb!==null){
        response.status(201).send({message:"user already existed"})
    }
    else{
        let hashedpassword=await bcryptjs.hash(newUser.password,5)
        newUser.password=hashedpassword
        await kidsCollectionObj.insertOne(newUser)
        response.status(201).send({message:"user created"})
        console.log(hashedpassword)

    }

}))


userApp.post("/user-login",expressAsyncHandler(async(request,response)=>{
    const kidsCollectionObj=request.app.get('kidsCollectionObj')
    const userCredentials=request.body
    const userOfDb=await kidsCollectionObj.findOne({username:userCredentials.username})
    if(userOfDb===null){
        response.status(200).send({message:"invalid username"})
    }
    else{
        let isValidPassword=await bcryptjs.compare(userCredentials.password,hashedpassword)
        if(isValidPassword===false){
            response.status(200).send({message:"invalid password"})

        }
        else{
            let jwtToken=jwt.sign({username:userOfDb.username},'abcdef',{expiresIn:120})
            delete userOfDb.password;
            response.send({message:"success",token:jwtToken,user:userOfDb})
            
        }

    }
}))