const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
app.use(require('cors')())
app.use(express.urlencoded({extende:false}))
app.use(express.static('session验证'))
//配置解析req通过post发送过来的在body中的数据所需要的配置
app.use(express.json())
//获取session模块
const session = require('express-session')
//配置session
app.use(session({
    secret:'lihuimin unit',//用作加密的字符串，随意指定
    resave:false, //固定写法
    saveUninitialized:true//固定写法
}))
//配置成功后，req就拥有了session属性，可以用来获取session信息
const router = express.Router()

const user = {
    userName:'lihuimin',
    userpassword:'lt19980608'
}
router.post('/login.html',(req,res)=>{
    if(req.body.userId != user.userName || req.body.password !=user.userpassword){
        console.log(req.body + '用户尝试登陆失败');
        return res.send({status:1,msg:'登陆失败'});
 
    }else{
        req.session.user = req.body //如果用户登录成功，那么存储该用户对象到session中
        req.session.islogin = true //标识该用户的登录状态
        res.send({status:0,msg:'登陆成功'});
    }

})
router.post('/back',(req,res)=>{
    req.session.destroy();
    res.send('0000');
})
router.get('/shouye.html',(req,res)=>{
    if(req.session.islogin == true){
        console.log(req.session);
        res.send({status:0,msg:'登陆成功'});
    }else{
        res.send(req.session);
    }
})
app.use(router)
app.listen(80,function(req,res){
    console.log('http://127.0.0.1');
})