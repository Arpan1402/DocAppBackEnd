const docService=require('../Service/DocService');

const DocController={

    postDocProfile: async(req,res)=>{
        let fname=req.body.fname;
        let lname=req.body.lname;
        let dob=req.body.dob;
        let gender=req.body.gender;
        let spec=req.body.spec;
        let avatar=req.body.avatar;

        if(!fname)
        {
            return res.json({message:'First Name not found'}).status(500);
        }
        else  if(!lname)
        {
            return res.json({message:'Last Name not found'}).status(500);
        }
        else  if(!dob)
        {
            return res.json({message:'Date of Birth not found'}).status(500);
        }
        else  if(!gender)
        {
            return res.json({message:'Gender not found'}).status(500);
        }
        else  if(!spec)
        {
            return res.json({message:'Specialization not found'}).status(500);
        }
        else
        {
            let response=await docService.uploadProfile(fname,lname,gender,dob,spec,avatar);
            return res.json(response).status(200);
        }
    },

    showDocList: async(req,res)=>{
        let response=await docService.DocList();
        res.json(response);
    },

    showDocProfile: async(req,res)=>{
        let id=req.body.id;
        if(!id){
            res.json('id not found').status(500);
        }
        else{
            let response=await docService.DocInfo(id);
            res.json(response);
        }
    }
} 

module.exports=DocController;