const http = require('http')
const request = require('./user') //reuired path

const server = http.createServer(request);

const port = 3000;
server.listen(port , ()=>{
    console.log("done")
})
