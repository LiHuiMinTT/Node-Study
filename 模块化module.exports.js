console.log('module.exports被执行了');
module.exports.name='name';
module.exports={ //require的对象以module.exports为准
    show(){
        console.log('show');
    },
    listen(){
        console.log('listen');
    }

}