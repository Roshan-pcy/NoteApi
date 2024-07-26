const mongodb=require('mongoose');
const database=require('../confi/db')
const bcrypt=require('bcrypt')
 
 const userSchema= mongodb.Schema({email:{ type:String,
    lowercase:true,
    require:true,
    unique:true
 },
password:{ type:String,
    require:true,

}


})
//here password is encrpted
userSchema.pre('save',async function(){
try{
var user=this;
const salt=await bcrypt.genSalt(10)
const hashcode=await bcrypt.hash(user.password,salt)
console.log('Hashed password is ---------------->' +hashcode)

user.password=hashcode;
}catch(error){
    console.log('errro from model -------- save ------>'+error)
 
}

})

userSchema.methods.compairPassword= async function(userPassword)
{
    try{
        console.log('Password to compare:', userPassword);
        console.log('Hashed password from database:', this.password);
        const isMatch= await bcrypt.compare(userPassword,this.password);
        return isMatch;


    }catch(error){
        console.log('errro from model -------- comapair Function ------>'+error)
    }
}
const UserModel=database.model('user',userSchema)
module.exports=UserModel;