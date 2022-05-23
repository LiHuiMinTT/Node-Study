//错误中间件作用：当客户端向服务器提出请求而服务器内部出现问题不能给响应时候，服务器进行的对该错误的响应，给前端好的反馈
const express = require('express')
const app = express()
//创建路由
const router = express.Router()
//设置路由监听事件
router.get('/',(req,res)=>{
    throw new Error('服务器内部错误！');
    res.send('一些数据')
})
//注册路由
app.use(router)
//定义错误级别中间件，对错误进行处理，错误中间件必须定义在路由注册完成之后，这样才能捕获到所有路由中服务器处理过程中发生的故障
//除了错误的中间件，其他中间件都需要在路由之前进行配置
app.use(function(err,req,res,next){
    console.log('服务发生故障！' + err)
    res.send('服务器发生了故障！' + err)
})

app.listen(80,(req,res)=>{
    console.log('服务器启动地址为http://127.0.0.1')
})