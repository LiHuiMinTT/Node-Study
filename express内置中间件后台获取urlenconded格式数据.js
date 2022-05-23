const express = require('express')
const multipart = require('multiparty');
const fs = require('fs');
const path = require('path');
const app = express()
//挂载中间件到服务器,只有这样才能顺利解析客户端发送过来的json数据
//除了错误中间件其他的中间件都需要在路由之前配置
//express.json() 和 express.urlencoded()在4.16.0版本之后可用
app.use(express.json())
//配置获取urlencoded格式数据的express内置中间件，这个需要传入一个固定写法的参数
app.use(express.urlencoded({extende:false}))
app.use(require('cors')())
app.post('/',(req,res)=>{
    //req.body可以获取到前端发送过来的zaibody中的数据,表单通过post，urencoded格式数据都在body
    console.log(req.body)
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(req.body.username);
})
app.post('/user',(req,res)=>{
    //req.body可以获取到前端发送过来的zaibody中的数据,表单通过post，urencoded格式数据都在body
    console.log(req.body,'req');
    res.send(req.body.username);
})
app.get('/',(req,res)=>{
    console.log(req.body)
    res.send('get2222')
})
app.get('/user',(req,res)=>{
    console.log(req.body)
    res.send('后台数据')
})
app.post('/upload',(req,res)=>{
    console.log('有文件上传');
    const form = new multipart.Form({
        uploadDir: './upload'
    });
    form.parse(req);
    form.on('field', (name, value) => {
        console.log('字段', name, value);
    });

    form.on('file', (name, file) => {
        console.log('文件', name, file);
    });

    form.on('close', ()=>{
        console.log('表单处理完成');
    });
    res.setHeader('Set-Cookie','name=lihuimin');
    res.send('ok')
});
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})