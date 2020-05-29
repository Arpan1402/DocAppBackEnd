const mongoose=require('mongoose');

const key=require('../Config/Keys');

const connectDB= async ()=>{

    try{
        await mongoose.connect(key.dbUri,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true 
          })

          console.log('DB Connected');
    }
    catch(err)
    {
        console.log('Connection failed');
        process.exit(1);
    }
}

module.exports=connectDB;