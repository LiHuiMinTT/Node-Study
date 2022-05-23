const express = require('express')
const app = express()
//中间件之间共享同一个res和req对象，最后路由的也是同样的req和res对象
function myfun1(req,res,next){
    console.log('中间件1处理')
    next()
}
function myfun2(req,res,next){
    console.log('中间件2处理')
    next()
}
app.use(myfun1)
app.use(myfun2)

const router = express.Router()
router.get('/',(req,res)=>{
    res.send('get返回的响应')
})

router.post('/',(req,res)=>{
    res.send('post返回的响应')
})
//注册路由
app.use(router)
app.listen(80,(req,res)=>{
    console.log('服务器启动并运行在http://127.0.0.1')
})