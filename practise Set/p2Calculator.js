const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-type' , 'text/html')
        res.write('<html>')
        res.write('<head> <title>Calculator</title></head>')
        res.write('<body>')
        res.write('<h1>Welcome</h1>')
        res.write('<a href = "/calculator">Calculator</>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
        }
    else if(req.url === '/calculator'){
        res.setHeader('Content-type' , 'text/html')
        res.write('<html>')
        res.write('<head> <title>Add Two Numbers</title></head>')
        res.write('<body>')
        res.write('<h2>Add Two Numbers</h2>')
        res.write('<label for="value">Number 1</label>')
        res.write('<form action="/calculate-result" method = "POST">')
        res.write('<input type="number" id="num1" placeholder="Enter first number" name = "number1" required>')
        res.write('<label for="value">Number 2</label>')
        res.write('<input type="number" id="num2" placeholder="Enter second number" name= "number2"  required>')
        res.write('<button type="submit">Add</button>')
        res.write('</form>')
        res.write('</form>')
        res.write('</html>')
        return res.end()
        
    }
    else if(req.url === '/calculate-result' && req.method =='POST'){
    
        const body = []
        let result;
         req.on('data' , (chunk)=>{
           
            body.push(chunk)
        })
        req.on('end' , ()=>{
            const fullBody = Buffer.concat(body).toString();
            
            const params = new URLSearchParams(fullBody);
           
            const jsonObj = Object.fromEntries(params)
            
            result = Number(jsonObj.number1) + Number(jsonObj.number2);
            console.log(result)
    
        res.setHeader('Content-type' , 'text/html')
        res.write(`
            <html>
                <head><title>Sum</title></head>
                <body>
                    <h1>Yout Sum is ${result}</h1>
                </body>
            </html>
        
        `);
        })
        return res.end();
        
        

        
    }

})
server.listen(5000,()=>{
    console.log("Redirecting to Page")
});