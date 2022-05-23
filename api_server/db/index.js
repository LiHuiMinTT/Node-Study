//此文件负责对外暴露数据库连接

//获取mysql模块
const mysql = require('mysql')

//建立数据库连接
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'766624766',
    database:'lhm'
})

//对外暴露数据库
module.exports = db