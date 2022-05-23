const express = require('express')
const app = express()
//快速托管静态资源供外界访问
const staticFile = express.static('static')
//托管文件进行注册
app.use(staticFile);
app.listen(80,(req,res)=>{
    console.log('服务器启动地址为http://127.0.0.1');
})