const http = require('http')
//const testingSyntax = require('./syntax') //reuired path
const runningSyntax = require('./runtime')
const logicalSyntax = require('./logical')
const server = http.createServer((req,res) =>{
    console.log(req.url , req.method);
 //   testingSyntax();
  //  runningSyntax();
    logicalSyntax();
});


const port = 3003;
server.listen(port , ()=>{
    console.log(`Running on port ${port}`)
})
