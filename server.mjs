import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer ((req, res) => {
    console.log('Received request...',req.url, req.method);
    if (req.url == '/') {
        if (req.method == 'GET') {
            res.statusCode = 200;
            res.setHeader ('Content-Type', text/plain);
            res.setHeader ('Access-Control-Allow-Origin', "*");

            res.end("Ananya");
        }
        
        if (req.method == 'OPTIONS') {
            res.statusCode = 200;
            res.setHeader ('Content-Type','application/json');
            res.setHeader ('Access-Control-Allow-Origin', 'http://12.0.0.1:5500');
            res.setHeader ('Access-Control-Allow-Methods', "POST, GET, OPTIONS");
            res.setHeader ('Access-Control-Allow-Headers', '*');
            res.end('ok');
        }

        if (req.method == 'POST'){
            console.log('post method...');
            res.statusCode = 200;
            res.setHeader ('Content6 - Type', text/plain);
            res.setHeader ('Access-Control-Allow-Origin', "*");
            res.end(JSON.stringify({surname : "Shankhdhar"}));
        }
    }
});

server.listen(port, hostname, () => {
    console.log("server running at http://$(hostname)://$(port)/");
})