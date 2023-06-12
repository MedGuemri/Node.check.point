

const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end("<h1> Hello Node !!!!<h1/>")
});

server.listen(port,hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`)
})