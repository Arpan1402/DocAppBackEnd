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
app.post('/profile',router)

app.listen(PORT,()=>{
    console.log('Server Started');
});