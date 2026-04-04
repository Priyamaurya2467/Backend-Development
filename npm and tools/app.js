const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Request")
})

const port = 5001;
server.listen(port,()=>{
    console.log("Done Successfully")
})