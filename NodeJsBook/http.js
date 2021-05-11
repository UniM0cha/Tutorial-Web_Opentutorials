const http = require('http');

const server = http.createServer((reqest, response) => {
    response.write('<h1>Hello Node!</h1>');
    response.end('<p>Hello Server!</p>');
});

server.listen(80);
server.on('listening', () => {
    console.log('80번 포트에서 서버 대기중!');
});
server.on('error', (error) => {
    console.error(error);
});