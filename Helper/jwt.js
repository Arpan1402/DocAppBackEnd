const jwt=require('jsonwebtoken');
const key=require('../Config/Keys');

const tokenManager={

    createTokenForEmail: async(user)=>{
        let token=await jwt.sign(
            {
                user:user.id
            },
            key.jwtKey,
            {
                expiresIn:'1d'
            }
        )

        return token;
    },

    jwtVerify: async(token)=>{
        let verify=jwt.verify(token,key.jwtKey);
        return verify;
    }
}

module.exports=tokenManager;