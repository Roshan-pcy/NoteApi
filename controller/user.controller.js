const userService=require('../service/user.service')
 

exports.register= async (req,res,next)=>{
    try{
        const {email,password}=req.body;
        console.log("value of both is "+email+"and "+password)
        const success= await userService.registerUser(email,password)
        
        res.status(200).json({ status: true, success: "Registered successfully" });
        console.log("the data is is"+success )

    }catch(error){
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
            // Duplicate key error for 'email' field
            return res.status(400).json({ status: false, error: "Email already exists" });
        } else {
            console.log("Error from controller: " + error);
            return res.status(500).json({ status: false, error: "Internal server error" });
        }
    }
}

exports.login= async (req,res,next)=>{
    try{
        const {email,password}=req.body;
        console.log("log in value of both is "+email+"and "+password)
        let user= await userService.isUserExits(email);
        if(user==false){
            throw new Error('User does not exits')
        }

        const isMatch= await  user.compairPassword(password)
        if(!isMatch){
            throw new Error('user password miss match')
        }


        let tokendata = {_id:user._id,email:user.email};
        console.log(tokendata)
        
        let token =await  userService.generateToken(tokendata,'key','1h')
        res.status(200).json({status:true,token:token});

    }catch(error){
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
            // Duplicate key error for 'email' field
            return res.status(400).json({ status: false, error: "Email already exists" });
        } else {
            console.log("Error from controller: " + error);
            return res.status(500).json({ status: false, error: "Internal server error" });
        }
    }
}