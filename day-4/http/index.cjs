const http = require('http');
const url = require('url');
const fs = require('fs');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type' : 'text/html'})
//     res.write('Hello Atez Bootcamp Students');
//     res.end();
// }).listen(1856);

http.createServer((req, res) => {
   const pathQuery = url.parse(req.url, true);
   const fileName = `.${pathQuery.pathname}`;
   fs.readFile(fileName, (err, data) => {
       if (err) {
           res.writeHead(404, {'Content-Type' : 'text/html'});
           return res.end('Boyle bir sayfa bulunamadi');
       }
       res.writeHead(200, { 'Content-Type': 'text/html'});
       res.write(data);
       return res.end();
   })
}).listen(1856);
