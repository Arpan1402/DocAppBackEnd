const express=require('express');
const patient=express.Router();
const patientController=require('../Controller/PatientController');

patient.post('/register',patientController.registration);
patient.post('/login',patientController.logIn);
patient.post('/profile',patientController.logIn);

module.exports=patient;