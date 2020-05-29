const express=require('express');
const mongoose=require('mongoose');
const DocModel=require('../Database/Models/doctor/doctor');

const DocController={
    DocProfile: async()=>{
        const response=await DocModel.find();
        return 
    }
}