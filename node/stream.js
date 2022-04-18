const fs = require('fs')

// 创造一个可读流，一个可写流，将可写流绑定在可读流上，一个简单的stream就完成了

const readable = fs.createReadStream
const writeable = fs.createWriteStream

readable.pipe(writeable, {
  end: false
})

readable.on('end', function () {
  writeable.end('结束')
})