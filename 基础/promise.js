var fs=require('fs'); //引入文件
fs.readFile('基础/somefile.txt',function(err,data){

//当异步读取完文件数据后执行该回调函数中代码
//err 错误对象；
//data 数据
if(err){
 console.log('读取文件出错');
return;
 }
 //正常打印数据
 console.log(data.toString());
})
console.log('111');
