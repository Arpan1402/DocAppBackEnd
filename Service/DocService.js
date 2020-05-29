const express=require('express');
const mongoose=require('mongoose');
const DocModel=require('../Database/Models/doctor/doctor');

const DocController={
    DocList: async()=>{
        try{
            const response=await DocModel.find();
            return response;
        }
        catch(err){
            return {err};
        } 
    },

    DocInfo: async(id)=>{
        try{
            const response=await DocModel.findById(id);
            return response;
        }
        catch(err){
            return {err};
        }
    },

    uploadProfile: async(fname,lname,gender,dob,spec,avatar)=>{
        let response={}
        try{
            let doctor=DocModel({
                fname,
                lname,
                gender,
                dob,
                spec,
                avatar
            });
    
            let doc=await doctor.save();
    
            if(doc.id){
                return response.msg="doctor registered";
            }
            else{
                return response.msg="registration failed";
            }    

        }
        catch(err){
            return response.msg=err;
        }
        
    }
}

module.exports=DocController;