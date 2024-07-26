const express=require('express')
const body_perser=require('body-parser')
const userRoute=require('./routers/user.route')
const toDoRoute=require('./routers/todoRoute')

const App=express();
App.use(body_perser.json())
App.use('/',userRoute)
App.use('/',toDoRoute)
module.exports=App