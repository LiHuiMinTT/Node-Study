const express = require('express')
const app = express()
const fs = require('fs');
//第三方中间件cors：解决跨域问题，路由之前使用
app.use(require('cors')())
const router = express.Router()
router.get('/',(req,res)=>{
    const data = req.query//get获取数据方法，查询字符串？专用获取参数方法
    console.log(data);
    res.send(data);                                                          
})
router.get('/download',(req,res)=>{
    fs.readFile(__dirname + '/static/unite4 result.pdf','',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.send(data)
        }

    })
})
app.use(router)
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})