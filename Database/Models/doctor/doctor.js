const mongoose=require('mongoose');

let DocSchema=new mongoose.Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    specializtion:{
        type:Array,
        required:true
    },
    avatar:{
        type:String,
        required:false
    },
    organization:{
        type:Object,
        required:true
        // orgName:String,
        // orgAddress:String,
        // orgPhone:Number
    }
})

module.exports=mongoose.model('DoctorProfile',DocSchema);