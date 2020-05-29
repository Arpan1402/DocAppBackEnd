const bcrypt=require('bcrypt');

const encrypt={
    enc: async (pass)=>{
        let res={}
        if(!pass)
        {
            return res.msg='Password not found';
        }
        else
        {
            return await creatHash(pass, await creatSalt());
        }
    },

    check: async(pass,hashPass)=>{
        let compare=await bcrypt.compare(pass,hashPass);
        if(compare)
        {
            return true;
        }
        else{
            return false;
        }
    }
}


const creatSalt = async()=>{
    const salt=await bcrypt.genSalt(10);
    return salt;
}

const creatHash = async(password,salt)=>{
    const hash=await bcrypt.hash(password,salt);
    return hash;
}

module.exports=encrypt;