const http = require('http');
http.createServer().listen(3000, () => {
  process.title = '测试进程'

  console.log(process.env);
})