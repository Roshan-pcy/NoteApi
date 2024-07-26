const userModel=require('../model/userModel');
const jwtToken=require('jsonwebtoken');



class UserModel{
    static async registerUser(email,password){
        try{
             const creatUser= new userModel({email,password})
             return await creatUser.save()
        }catch(e){
            console.log("Error from  userModel"+ e)
        }

    }
    static async isUserExits(email){
        try{
            
             return await   userModel.findOne({email})
        }catch(e){
            console.log("Error from  userModel"+ e)
        }

    }
    static async generateToken(token, key, expiredate) {
        try {
            const generatedToken = await jwtToken.sign(token, key, { expiresIn: expiredate });
            console.log('genarated toekn--------->>>> is '+generatedToken)
            return generatedToken;
        } catch (error) {
            console.log('Error generating token:', error);
            throw error;
        }
    }
}

module.exports=UserModel