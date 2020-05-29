const mongoose=require('mongoose');

// const newSchema=new mongoose.Schema({

//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     isVerified:{
//         type:Boolean,
//         default:false
//     },
//     userId:{
//         type:mongoose.Types.ObjectId,
//         ref:'patientProfile'
//     },
//     userId:{
//         type:mongoose.Types.ObjectId,
//         ref:'Prescription'
//     }
// });

const newSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    gender:{
        type:String,
    },
    dob:{
        type:Date,
    },
    address:{
        building:String,
        street:String,
        district:{
            type:String,
        },
        pin:{
            type:Number,
        },
        state:{
            type:String,
        },
        country:{
            type:String,
        }
    },
    phoneNumber:{
        type:Number
    },
    height:String,
    weight:String,
    avatar:{
        type:String,
    },
    presciption:{
        doctorName:{
            type:String,
        },
        issueDate:{
            type:Date,
        },
        presciption:{
            type:String,
        },
    }
});
module.exports=mongoose.model('patient',newSchema);