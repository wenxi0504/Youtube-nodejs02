//倒入HTTP某块
const http=require("http");//http module
//http模块创建服务器server,然后填入一个请求监听器（收集前端发过来的请求）
const server=http.createServer((request, response)=>
{response.end("HEllo From NodeJS Server");//end函数把数据导入前端

});
//1.端口（port）， 2.IP地址，3.回调函数（callback）
const port=3000;
const ip="127.0.0.1";//此电脑本机IP

server.listen(port, ip,() =>{
    console.log('Server is running at http://${ip}:${port}');
});

//监听器(Listener)=函数（Function）
//()=>新的定义函数的工具箭头函数；
//request=请求object,response=回应object
//response.end()后端发送信息到前端，response.setHeader()函数设置头部信息
//