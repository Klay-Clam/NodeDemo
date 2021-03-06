var mongoose = require('mongoose');

// 设置存储路径
var DB_URL = 'mongodb://bloger:bloger@127.0.0.1:27017/blog';
//连接数据库
mongoose.connect(DB_URL);

// 连接成功之后输出语句
mongoose.connection.on("connected",function(){
    console.log('Mongoose connect ' + DB_URL + ' success');
});

// 数据库连接失败之后 输出错误信息
mongoose.connection.on('error',function(err){
    console.log("Mongoose connect error: " + err);
});

// 断开数据库连接之后 输出日志
mongoose.connection.on("disconnected",function(){
    console.log('Mongoose connect disconnected');
})

module.exports = mongoose;