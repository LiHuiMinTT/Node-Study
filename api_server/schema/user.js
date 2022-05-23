//此文件创建后端对前端发送数据的验证规则，并在路由时使用该验证规则

//导入建立验证规则的包
const  joi = require('joi')
/**
 * string() 值必须是字符串
 * alphanum 值必须只能包含a-z A-Z 0-9的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 设置是否为必填项
 * pattern(正则表达式) 值必须符合正则表达式规则
 */

//建立用户名验证规则
const username  = joi.string().alphanum().min(3).max(16).required()
//建立密码验证规则
const password = joi.string().pattern(/^[\S]{6,12}$/).required()  //[/S]不能包含空格
const id = joi.string().alphanum().min(3).max(10).required()

//导出验证规则对象
reg_login_schema = {
    body:{
        username,//username:username es6简单写法直接写username即可
        password,
        id,
    }
}
module.exports = reg_login_schema