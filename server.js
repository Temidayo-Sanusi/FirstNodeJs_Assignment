const http = require("http");

const PORT = 8080;
const HOSTNAME = "localhost";

function eventHandler(req, res){
    console.log(req);
     res.end("Hello World");
}

const server = http.createServer(eventHandler);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server successfilly created at http://${HOSTNAME}:${PORT}`)
})