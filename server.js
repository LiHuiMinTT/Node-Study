//node原生的创建服务器的方式http模块
const http = require('http');
const path = require('path');
const fs = require('fs')
const server = http.createServer();
server.on('request',(req,res)=>{
    console.log('有用户访问');
    //设置响应头避免服务器返回结果乱码
    res.setHeader('Content-Type','text/html;charset=utf-8');
    console.log(req.url);
    if(req.url == '/'){
        fs.readFile(path.join(__dirname,'./test.html'),function(err,datastr){
            res.end(datastr);
        })
    }
});
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
});