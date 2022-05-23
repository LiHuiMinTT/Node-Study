const express = require('express');
const app = express();
const routerJsonp = express.Router();
// app.use(require('cors')());
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
routerJsonp.get('/jsonp',(req,res)=>{
    const funname = req.query.callback
    const data = {name:'lhm'};
    res.send(`${funname}(${JSON.stringify(data)})`)
});
app.use(routerJsonp);
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})