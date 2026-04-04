let http = require("http")
let server = http.createServer((req, res) => {
    res.end("Hello from the other side")
}) 


server.listen("8000") //http://localhost:8000
console.log("Server started at port 8000");