const express = require('express')
const app = express()
//挂载中间件到服务器,只有这样才能顺利解析客户端发送过来的json数据
//除了错误中间件其他的中间件都需要在路由之前配置
app.use(express.json())
app.post('/user',(req,res)=>{
    //req.body可以获取到前端发送过来的zaibody中的数据
    console.log(req.body)
    res.send('user')
})
app.get('/',(req,res)=>{
    console.log(req.body)
    res.send('get')
})
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})