const express=require('express');
const jwtHelper=require('../Helper/jwt');
const encryptHelper=require('../Helper/encrypt');
const regModel=require('../Database/Models/patient/registration');
const emailSender=require('../Utils/email');
const jwt=require('jsonwebtoken');
const keys=require('../Config/Keys');
const mongoose=require('mongoose');

const patientService={
    patientReg: async(email,password)=>{
        const response={};
        try{
            const patient=await regModel.findOne({email});
           
            if (patient) {
                return response.msg = 'Email already exist';
                console.log(patient.email)
            }

            
            password = await encryptHelper.enc(password);
            let newPatient = regModel({
                email,
                password
            });

            let npatient = await newPatient.save();

            if (npatient.id) {
                response.msg = 'Patient Registered';

                let emailToken = await jwtHelper.createTokenForEmail(newPatient);
            }
            // let sendMail={
            //     to:newPatient.email,
            //     emailToken
            // }
            return response.msg;
                
            
        }
        catch(err){
            console.log(err);
            throw new err;
        }
    },

    profileSetUp: async(token,fname,lname,address,age,dob,phone,height,weight,avatar)=>{
        const response={}
        let id=jwtHelper.jwtVerify(token,keys.jwtKey);
        let patientInfo={firstName:fname}
        try{
            
            let conf=await regModel.findByIdAndUpdate(id,patientInfo,{new:true});
            return response.msg="profile updated";
        }
        catch(err){
            throw new err;
        }
     },

    patientLogIn: async(email,pass)=>{

        const response={msg:''};

        try{
            const patient=await regModel.findOne({email});
            if(!patient){
                console.log('no user')
                return response.msg='User not found';
            }
            else {
                console.log(patient.email);
                compare = await encryptHelper.check(pass, patient.password);
                if (compare) {
                    let token = await jwt.sign({ user: patient.id }, keys.tokenkey);
                    console.log(token)
                    return response.msg = token;
                }
            }
        }
        catch(err){
            return response.msg=err;
        }
    }

}

module.exports=patientService;