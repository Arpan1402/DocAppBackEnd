const express=require('express');
const mongoose=require('mongoose');
const connection=require('./Database/dbConnection');
const router=require('./Routes/Patient');

connection();

const app=express();

app.use(express.json());

const PORT=process.env.PORT||6000;

app.post('/register',router);
app.post('/login',router);
app.post('/profile',router);
app.post('/doctor',router);
app.get('/doctorList',router);
app.get('/doctorProfile',router);
app.get('/patientProfile',router);


app.listen(PORT,()=>{
    console.log('Server Started');
});