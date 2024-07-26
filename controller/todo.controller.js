const TodoSeervice=require('../service/todo.service')
exports.createTodo= async (req,res,next)=>{
    try{
        const {userId,title,dis}=req.body;
        let toDo=await TodoSeervice.createTodo(userId,title,dis)
        res.status(200).json({status:true,success:toDo});

    }catch(error){
        next(error)
    }

}
exports.gettododata= async function (req,res,next){
    try{
        const {userId}=req.body;
        let toDo=await TodoSeervice.getToDoData(userId)
        res.status(200).json({status:true,success:toDo});

    }catch(error){
        next(error)
    }

}
exports.deletetodo= async function (req,res,next){
    try{
        const {id}=req.body;
        let deleted=await TodoSeervice.deleteTodo(id)
        res.status(200).json({status:true,success:deleted});

    }catch(error){
        next(error)
    }

}