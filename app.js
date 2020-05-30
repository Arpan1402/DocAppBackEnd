const express=require('express');
const mongoose=require('mongoose');
const connection=require('./Database/dbConnection');
const prouter=require('./Routes/Patient');
const drouter=require('./Routes/Doctor');


connection();

const app=express();

app.use(express.json());

const PORT=process.env.PORT||6000;

app.post('/register',prouter);
app.post('/login',prouter);
app.post('/profile',prouter);
app.post('/doctor',drouter);
app.get('/doctorList',drouter);
app.get('/doctorProfile',drouter);
app.get('/patientProfile',prouter);


app.listen(PORT,()=>{
    console.log('Server Started');
});