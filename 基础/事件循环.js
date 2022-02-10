setTimeout(() => {
  console.log(1);
});

new Promise((resolve, reject) => {
  console.log(2);
  resolve(3)
}).then(res => {
  console.log(res);
})

// 在浏览器环境中与node环境中大致相同，node使用了chrome v8引擎作为js解释器，v8引擎分析了代码之后使用node的api去执行，node的事件循环在libuv引擎

