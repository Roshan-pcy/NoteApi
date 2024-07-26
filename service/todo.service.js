const TodoModel=require('../model/todoModel')

class TodoSerice{
    static async createTodo(userId,title,dis){
        const createTodo=new TodoModel({userId,title,dis})
        return await createTodo.save()

    }
    static async getToDoData(userId){
        const tododata=await TodoModel.find({userId})
        return  tododata;

    }
    static async deleteTodo(userId){
        const datadata=await TodoModel.findOneAndDelete({_id:userId})
        return  datadata;

    }
}
module.exports=TodoSerice;