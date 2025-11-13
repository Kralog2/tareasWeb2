const http = require('http');
 const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Servidor HTTP funcionando');
 });

server.listen(3000, ()=>{
    console.log('Servido corriendo en http://localhost:3000');
});