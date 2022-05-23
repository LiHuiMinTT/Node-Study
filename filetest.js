fs = require('fs');
path = require('path'); 
fs.readFile(__dirname + '/files/score.txt','utf-8',function(err,datastr){
    if(err){
        console.log('defeat read file' + err);
    }else{
        console.log('read success' + datastr);
    }

//格式转换
let scoreStr = datastr.replaceAll(' ','\n').replaceAll('=',',')
// 写文件
    fs.writeFile(path.join(__dirname,'./files/new初试成绩2.txt'),scoreStr,function(err){
        if(err){
            console.log('defeat write' + err);
        }else{
            console.log('write success');
        }
    })
})