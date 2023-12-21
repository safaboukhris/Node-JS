const http = require('http');

        //create a server
const server = http.createServer((request,response)=>{
    response.writeHead(200,'OK',{'content-type': 'text/html'});
    response.end('<h1>HELLO WORLD</h1>\n');
})

server.listen(3000,()=>{
    console.log('Server running at http://127.0.0.1:3000/' );
})