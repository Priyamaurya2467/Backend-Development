
//user input

const http = require('http')
const fs = require('fs')


const server =http.createServer((req , res)=>{
    console.log(req.url , req.method)

    if(req.url === '/'){

         res.setHeader('Content-Type' , 'text/html ')
         res.write('<html>')
         res.write('<head><title>Complte Coding</title></head>')
         res.write('<body><h1>Enter Your Detail</h1></body>')
         res.write('<form action= "/submit-detail" method = "POST">')
         res.write('<label for="name">Name</label>')
         res.write('<input type="text" name="username" placeholder="Enter your name">' )
         res.write('<label>Gender</label>')
         res.write('<div class="gender">')
         res.write('<input type="radio" name="gender" id="male" value = "male">')
         res.write('<label for="male">Male</label>')
         res.write('<input type="radio" name="gender" id="female" value = "female">')
         res.write('<label for="female">Female</label>')
         res.write('</div>')
         res.write('<button type="submit">Submit</button>')
         res.write('</form>')
         res.write('</html>')
         return res.end();

    }else if(req.url.toLowerCase() === "/submit-detail" && req.method == 'POST'){ //WRITING TEXT IN FILE NA DMETHOD POST MEANS THAT ON COMING TO SUBMIT-DETAIL IT MAY THAVE SOME DATA IT SHOULD NOT BE BLANK
        const body = []
            req.on('data' , chunk =>{
                
                body.push(chunk)
            })
            req.on('end' , ()=>{
                const fullBody=Buffer.concat(body).toString()
                const params = new URLSearchParams(fullBody);
                const BodyObject = Object.fromEntries(params);
                console.log(BodyObject)
                fs.writeFileSync('user.txt' , JSON.stringify(BodyObject));
                
            })



        fs.writeFileSync('user.txt' , 'Prashant Jain');
        res.statusCode = 302;
        res.setHeader('Location' , '/')  //Go BACK TO HOME PAGE

        

    }

        res.setHeader('Content-Type' , 'text/html ')
        res.write('<html>')
        res.write('<head><title>Complte Coding</title></head>')
        res.write('<body><h1>Hello Everyone</h1></body>')
        res.write('</html>')
        res.end();
    
});

const port = 3000;
server.listen(port  , ()=>{
    console.log(`Running at port ${port}`)
});