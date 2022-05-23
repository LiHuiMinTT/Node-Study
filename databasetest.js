//引入mysql模块
const mysql = require('mysql')
//通过mysql模块连接到指定数据库
const mydatabase = mysql.createPool({
    host:'localhost' || '127.0.0.1',//数据库所在主机地址 value || value1 如果前面value为空则使用后面一个
    user:'root',//用户名,
    password:'766624766',//密码
    database:'lhm'//指定需要操作的数据库
}) 
//连接测试,第一个参数为执行的语句，第二个是回调函数
mydatabase.query('select * from stu1',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
        console.log('----------');
        console.log(result[0].sname);
    }
})
//插入数据
sqlStr = 'insert into stu1 values (?,?,?,?,?)';//?占位符，可以后面使用该字符串命令时使用
mydatabase.query(sqlStr,['2221102','李明辉','男',23,'电子信息软件工程'],(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    if(result.affectedRows ===1){
        console.log('插入成功');
    }
})//第二参数为补充占位符的数组