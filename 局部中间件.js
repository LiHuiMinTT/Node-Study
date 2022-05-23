const express = require('express')
const app = express()
function myfun1(req,res,next){
    console.log('中间件1处理')
    next()
}
function myfun2(req,res,next){
    console.log('中间件2处理')
    next()
}
app.use(myfun1)
//不通过app.use注册的中间件，而是在每一个监听请求的设置中设置中间件，那么那个中间件就是只属于该设置的局部中间件


const router = express.Router()
router.get('/',(req,res)=>{
    res.send('get返回的响应')
})
//引入局部中间件
router.get('/user',myfun2,(req,res)=>{
    res.send('get返回的响应,局部路由起效果')
})
router.post('/',(req,res)=>{
    res.send('post返回的响应')
})
//注册路由
app.use(router)
app.listen(80,(req,res)=>{
    console.log('服务器启动并运行在http://127.0.0.1')
})