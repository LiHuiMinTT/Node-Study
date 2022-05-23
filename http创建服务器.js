const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    console.log('有人访问服务器');
    console.log('url：' + req.url);
    console.log('method' + req.method); 
    res.end('服务器返回的数据');//通过end向客户端发送一些数据

})
server.listen(8080,(res,req)=>{
    console.log('服务器启动在http://127.0.0.1:8080');
})