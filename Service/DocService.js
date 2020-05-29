const express=require('express');
const mongoose=require('mongoose');
const DocModel=require('../Database/Models/doctor/doctor');

const DocController={
    DocProfile: async()=>{
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
    }
}

module.exports=DocController;