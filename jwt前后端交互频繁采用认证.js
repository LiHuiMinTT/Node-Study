const express = require('express')
const app = express()
const jwt = require('jsonwebtoken') //导入生成jwt字符串的包
const expressJWT = require('express-jwt')//解析jwt字符串转换为JSON对象的包,5.3.3版本
const router = express.Router()
const privateRouter = express.Router()
//设置支持跨域资源共享
app.use(require('cors')())
//设置支持获取body中数据
app.use(express.json())
app.use(express.urlencoded({extende:false}))
//设置JWT加密密钥字符串，自己指定
const secretKey = 'lihuimin no.1'

//设置路由
router.post('/login',(req,res)=>{
    //通过jsonwebtoken包提供的sign()方法，将用户信息（一般加密用户名，密码不能加密，因为需要传输，带密码的话不安全）加密并发送给客户端
    const secretedStr = jwt.sign({username:req.body.userName},secretKey,{expiresIn:'30s'})//3个参数（需要加密内容(对象)，加密密钥，加密后内容有效时间（对象）），结果得到的是加密后的字符串
    console.log(req.body)
    res.send({
        status:200,
        message:'登录成功',
        token:secretedStr
    })
})
//注册将token字符串解析成JSON对象的中间件
app.use(expressJWT({secret:secretKey}).unless({path:[/^\/api\//]}))//unless({path:[?]}):指定符合以/api开头的接口不需要访问权限。正则
//配置该中间件后，便可以使用req.user解析出用户信息
privateRouter.post('/info',(req,res)=>{
    console.log(req.user);
    res.send({
        status:200,
        message:'获取信息成功',
        data:req.user //req.user就是加载解析token的ExpressJWT中间件后，可以通过该方式获取加密的token解析后的内容
    })
})
app.use('/admin',privateRouter)
app.use('/api',router) //设置访问该路由时需要添加的网络前缀
app.listen(80,(req,res)=>{
  
    console.log('http://127.0.0.1')
})