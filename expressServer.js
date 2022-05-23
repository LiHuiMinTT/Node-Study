const express = require('express');//导入express
const app = express();//创建服务器实例app
//监听前端请求get post
app.get('/user',(req,res)=>{
    res.send({name:'李辉民',age:20,sex:'man'});//第二个参数是回调函数，给前端返回数据
})
app.get('/',(req,res)=>{
    res.send('zhuye');//第二个参数是回调函数，给前端返回数据
})
app.post('/user',(req,res)=>{
    console.log('post响应');
    res.send('post响应');
})
//开启服务器
app.listen(80,()=>{
    console.log('服务器启动，ip地址为127.0.0.1');
});