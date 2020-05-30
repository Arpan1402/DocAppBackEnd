const express=require('express');
const patientService=require('../Service/PatientService');
const patient=express();

const patientController={

    registration: async(req,res)=>{
        let message=''
        const email=req.body.email;
        const password=req.body.pass;
        console.log(email+'  '+password);
        if(!email)
        {
            return res.json({message:'email not found'}).status(500);
        }
        else if(!password)
        {
            return res.json({message:'password not found'}).status(500);
        }
        else
        {
            message = await patientService.patientReg(email, password);
        }
        return res.json(message);
    },

    logIn: async(req,res)=>{
        const email=req.body.email;
        const password=req.body.pass;
        if(!email)
        {
            return res.json({message:'email not found'}).status(500);
        }
        else  if(!password)
        {
            return res.json({message:'password not found'}).status(500);
        }
        else
        {
            let message=await patientService.patientLogIn(email,password);

            return res.json(message)
        }
        console.log(message);
    },

    profileSetup: async(req,res)=>{
        const token=req.body.token;
        const fname=req.body.fname;
        const lname=req.body.lname;
        const age=req.body.age;
        const dob=req.body.dob;
        const address=req.body.address;
        const phone=req.body.phone;
        const height=req.body.height;
        const weight=req.body.weight;
        const avatar=req.body.avatar;

        if(!token)
        {
            return res.json({message: 'Token not found'}).status(500);
        }
        else  if(!fname)
        {
            return res.json({message:'First Name not found'}).status(500);
        }
        // else  if(!lname)
        // {
        //     return res.json({message:'Last Name not found'}).status(500);
        // }
        // else  if(!age)
        // {
        //     return res.json({message:'Age not found'}).status(500);
        // }
        // else  if(!dob)
        // {
        //     return res.json({message:'Date of Birth not found'}).status(500);
        // }
        // else  if(!address)
        // {
        //     return res.json({message:'Address not found'}).status(500);
        // }
        // else  if(!height)
        // {
        //     return res.json({message:'Height not found'}).status(500);
        // }
        // else  if(!weight)
        // {
        //     return res.json({message:'Weight not found'}).status(500);
        // }
        else
        {
            let message=await patientService.profileSetUp(token,fname,lname,address,age,dob,phone,height,weight,avatar);

            return res.json(message);
        }
    },

    showProfile: async(req,res)=>{
        let token=req.body.token;
        if(!token){
            return res.json({message:"token not found"});
        }
        else{
            let prof=await patientService.patientProfile(token);
            return res.json(prof);
        }
    }
}


module.exports=patientController;