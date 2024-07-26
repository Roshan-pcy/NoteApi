const database=require('mongoose');
const connection =database.createConnection('mongodb://127.0.0.1:27017/Notedb').on('open',()=>{console.log('Conneted to datbase')}).on('error',()=>{console.log('error while connecting')})

module.exports=connection;