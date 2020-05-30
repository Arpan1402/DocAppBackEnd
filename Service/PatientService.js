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

    profileSetUp: async(token,fname,lname,address,dob,phone,height,weight,gender,avatar,presciption)=>{
        const response={}

        // let pres={
        //     doctorName:presciption.doc,
        //     issueDate:presciption.idate,
        //     presciption:presciption.presciption
        // };

        let patientInfo={
            firstName:fname,
            lastName:lname,
            address:address,
            gender:gender,
            dob:dob,
            phoneNumber:phone,
            height:height,
            weight:weight,
            avatar:avatar,
            presciption:presciption
        }
        try{
            let id=await jwtHelper.jwtVerify(token);
            console.log(id.user)
            let conf=await regModel.findByIdAndUpdate(id.user,patientInfo,{new:true});
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
                    let token = await jwtHelper.createTokenForEmail(patient);
                    console.log(token)
                    return response.msg = token;
                }
            }
        }
        catch(err){
            return response.msg=err;
        }
    },

    patientProfile: async(token)=>{
        let response={};
        
        try{
            // console.log('before verify'+token);
            let id=await jwtHelper.jwtVerify(token);
            //console.log(id.user);
            response=await regModel.findById(id.user);
            console.log(response+"res");
            return response;
        }
        catch(err){
            console.log(err);
            return response.msg=err;
        }
    }

}

module.exports=patientService;