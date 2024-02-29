const exp=require("express")
const userApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')      


const { request } = require("http")


/*userApp.get('/get-users',expressAsyncHandler(async(request,response)=>{
const userCollectionObj=request.app.get("userCollectionObj")
let usersList=userCollectionObj.find().toArray()
response.status(201).send({message:"all users",payload:usersList})
}))*/

userApp.get('/get-user', expressAsyncHandler(async (request, response) => {
    try {
        const userCollectionObj = request.app.get('userCollectionObj');
        const { username } = request.query;

        const userOfDB = await userCollectionObj.findOne({ "username": username });

        if (userOfDB === null) {
            response.status(404).send({ message: "User not found" });
        } else {
            delete userOfDB.password;
            response.status(200).send({ message: "User", payload: userOfDB });
        }
    } catch (error) {
        console.error('Error:', error);
        response.status(500).send({ message: 'An error occurred' });
    }
}));
userApp.use(exp.json())
userApp.post('/create-user',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get('userCollectionObj')
    let newUser=request.body
    console.log("Received request body",newUser)
  
    await userCollectionObj.insertOne(newUser)
    response.status(201).send({message:"user created"})
}))




userApp.post('/user-login', expressAsyncHandler(async (request, response) => {
    try {
        const userCollectionObj = request.app.get('userCollectionObj');
        const dataToStore = request.body;

        // Assuming dataToStore is an array containing medicine entries
        // Process and store each medicine entry in the database
        for (const entry of dataToStore) {
            const { medicine, phoneNumber, times } = entry;

            // Assuming userCollectionObj is your MongoDB collection
            await userCollectionObj.insertOne({
                medicine,
                phoneNumber,
                times
            });
        }

        response.status(200).send({ message: "Data stored successfully" });
    } catch (error) {
        console.error('Error:', error);
        response.status(500).send({ message: 'An error occurred' });
    }
}));





userApp.post('/create-user', expressAsyncHandler(async (request, response) => {
    try {
        const userCollectionObj = request.app.get('userCollectionObj');
        const requestData = request.body;
        const formattedData = requestData.map((entry) => {
            return {
                medicine: entry.medicine.toLowerCase(), // Convert medicine name to lowercase
                phoneNumber: entry.phoneNumber.replace(/\D/g, ''), // Remove non-numeric characters from phone number
                times: entry.times.map((time) => time.toUpperCase()) // Convert times to uppercase
            };
           
        });

        // Insert the formatted data into the database
        const insertionResult = await userCollectionObj.insertMany(formattedData);

        if (insertionResult) {
            response.status(201).send({ message: 'Data stored' });
        } else {
            response.status(500).send({ message: 'Failed to store data' });
        }
    } catch (error) {
        console.error('Error:', error);
        response.status(500).send({ message: 'Failed to store data' });
    }
}));






userApp.delete('/delete-user/:id',expressAsyncHandler(async(request,response)=>{
    const userCollectionObj=request.app.get('userCollectionObj')
    let userId=(+request.params.id)
    await userCollectionObj.deleteOne({id:userId})
    response.status(201).send({message:"user deleted"})
}))



module.exports=userApp






