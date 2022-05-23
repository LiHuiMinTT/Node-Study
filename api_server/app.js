//app.js是项目入口文件

//导入express
const express = require('express')

//获取一个服务器实例
const app = express()

//设置跨域共享
const cors = require('cors')
app.use(cors())

//设置解析数据的中间件
const json = express.json()
const urlencoded = express.urlencoded({extended:false})
app.use(json)
app.use(urlencoded)


const joi = require('joi')

//注册一个当注册失败时,返回指定消息给前端的中间件函数
app.use((req,res,next)=>{
    res.cc = function(err,status = 1){//第二个参数为当调用函数时，没有指定第二个值时候，status默认为1
        res.send({
            status,
            message:err instanceof Error? err.message : err,
        })

    }
    next()
})
//导入定义好的路由
const userRouter = require('./router/user')
//注册路由,并设置公共访问头部为/api
app.use('/api',userRouter)


app.use((err,req,res,next)=>{
    if(err instanceof joi.ValidationError){
        res.cc(err)
        return
    }
    console.log(err);
    res.cc(err)
})
//开启服务器，运行在3007端口
app.listen(3007,(req,res)=>{
    console.log('http://127.0.0.1:3007');
})