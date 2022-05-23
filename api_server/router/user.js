const express = require('express')
const router = express.Router()
//导入路由数据验证模块
const expressJoi = require('@escook/express-joi/index')
//导入验证规则对象
const reg_login_schema = require('../schema/user') //解构赋值，只引入需要的内容

//引入路由函数对象
const routerFun = require('../router_handler/user')

//在需要验证数据的路由中引入局部验证中间件，并指明验证规则,并提供验证失败时的错误中间件，错误中间件需要在路由之后配置，所以去app文件配置
router.post('/reguser',expressJoi(reg_login_schema),routerFun.reguserFun)
router.post('/login',routerFun.loginFun)

//module.exports是一个对象，用于在其他包中引入指定的对象
module.exports = router