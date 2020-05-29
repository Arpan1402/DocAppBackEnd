const express=require('express');
const doc=express.Router();
const docController=require('../Controller/DoctorController');

doc.post('/doctor',docController.postDocProfile);
doc.get('/doctorProfile',docController.showDocProfile);
doc.get('/doctorList',docController.showDocList);

module.exports=doc;