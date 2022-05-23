//设置路由函数，模块化开发，之后再路由中再引入定义好的路由处理函数

const req = require("express/lib/request")
const res = require("express/lib/response")
const router = require("../router/user")
//加密模块
const bcrypt = require('bcryptjs')
//注册信息的路由函数
function loginFun(req,res){
    res.send('login is ok')
}

//登录的路由函数和中间需要用到的数据库查询
const db = require("../db/index")
function reguserFun(req,res){
    // if(!req.body.username || !req.body.id){
    //     return res.cc('用户名或密码不能为空')//res.send发送完后不会结束当前路由，所以需要return下,一个路由只能send一次
    // }
    //不使用if来判断，通过第三方验证中间件进行表单验证

    // //数据库查询
    db.query(`select * from ev_users where id = ${req.body.id}`,(err,result)=>{
        console.log(result);
        if(err){
            res.cc(err)
            return
        }
        if(result.length != 0){
            res.cc('当前用户名已存在') 
            return
        }

        //信息可以注册时运行的代码
        //复杂写法 inser into ev_users values(?,?,?,?,?,?)
        queryStr = 'insert into ev_users set ?'//?可以为一个对象
        
        const body = req.body
        //安装加密中间件bcryptjs对注册的密码进行加密存储，及时数据库被盗，也能保证安全
        body.password = bcrypt.hashSync(body.password,10)//（加密字符串，）

        db.query(queryStr,body,(err,result)=>{
            if(err){
                console.log('出现插入错误');
                res.cc('出现插入错误')
                return
            }
            if(result.affectedRows !== 1){
                return res.cc({status:1,message:'插入失败'})
            }
            console.log(body.username + '注册成功');
            res.cc(`${body.username}注册成功`,0)
        })


    })

}

//导出路由函数
module.exports = {loginFun,reguserFun}