const mongodb=require('mongoose');
const database=require('../confi/db')
const UserModel=require('../model/userModel')
const {Schema} =mongodb
const todoschema= mongodb.Schema({
    
    userId:{type:Schema.Types.ObjectId,
        ref:UserModel.modelName,

    },
    
    title:{ type:String,
    required:true
    
 },
dis:{ type:String,
    required:true

     

}


})
const todoModel=database.model('todo',todoschema)
module.exports=todoModel;