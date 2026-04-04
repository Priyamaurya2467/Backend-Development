const http = require('http')


const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-type' , 'text/html')
        res.write('<html>')
         res.write('<head><title>Practise Set 1</title></head>')
         res.write('<body>')
        res.write('<a href = "/">Home</a> </br>')
        res.write('<a href ="/men">Men</a></br>')
        res.write('<a href ="/women">Women</a></br>')
        res.write('<a href ="/kids">Kids</a></br>')
        res.write('<a href ="/carts">Carts</a></br>')
        res.write('</body>')
        res.write('<h1>Welcome to home Page</h1>')
        res.write('</html>')
        return res.end()
    }
    else if(req.url.toLowerCase() == '/men'){
        res.setHeader('Content-type' , 'text/html')
        res.write('<html>')
         res.write('<head><title>Practise Set 1</title></head>')
         res.write('<body>')
        res.write('<a href = "/">Home</a> </br>')
        res.write('<a href ="/men">Men</a></br>')
        res.write('<a href ="/women">Women</a></br>')
        res.write('<a href ="/kids">Kids</a></br>')
        res.write('<a href ="/carts">Carts</a></br>')
        res.write('</body>')
        res.write('<h1>Welcome to men Page</h1>')
        res.write('</html>')
        return res.end()
    }

     else if(req.url.toLowerCase() == '/women'){
        res.setHeader('Content-type' , 'text/html')
        res.write('<html>')
         res.write('<head><title>Practise Set 1</title></head>')
         res.write('<body>')
        res.write('<a href = "/">Home</a> </br>')
        res.write('<a href ="/men">Men</a></br>')
        res.write('<a href ="/women">Women</a></br>')
        res.write('<a href ="/kids">Kids</a></br>')
        res.write('<a href ="/carts">Carts</a></br>')
        res.write('</body>')
        res.write('<h1>Welcome to women Page</h1>')
        res.write('</html>')
        return res.end()
    }

     else if(req.url.toLowerCase() == '/kids'){
        res.setHeader('Content-type' , 'text/html')
        res.write('<html>')
         res.write('<head><title>Practise Set 1</title></head>')
         res.write('<body>')
        res.write('<a href = "/">Home</a> </br>')
        res.write('<a href ="/men">Men</a></br>')
        res.write('<a href ="/women">Women</a></br>')
        res.write('<a href ="/kids">Kids</a></br>')
        res.write('<a href ="/carts">Carts</a></br>')
        res.write('</body>')
        res.write('<h1>Welcome to kids Page</h1>')
        res.write('</html>')
        return res.end()
    }

     else if(req.url.toLowerCase() == '/cart'){
        res.write('<html>')
         res.write('<head><title>Practise Set 1</title></head>')
         res.write('<body>')
        res.write('<a href = "/">Home</a> </br>')
        res.write('<a href ="/men">Men</a></br>')
        res.write('<a href ="/women">Women</a></br>')
        res.write('<a href ="/kids">Kids</a></br>')
        res.write('<a href ="/carts">Carts</a></br>')
        res.write('</body>')
        res.write('<h1>Welcome to Cart Page</h1>')
        res.write('</html>')
        return res.end()
    }

     else {
         res.setHeader('Content-type' , 'text/html')
        res.write('<html>')
         res.write('<head><title>Practise Set 1</title></head>')
         res.write('<body>')
        res.write('<a href = "/">Home</a> </br>')
        res.write('<a href ="/men">Men</a></br>')
        res.write('<a href ="/women">Women</a></br>')
        res.write('<a href ="/kids">Kids</a></br>')
        res.write('<a href ="/carts">Carts</a></br>')
        res.write('</body>')
        res.write('<h1>Welcome to home Page</h1>')
        res.write('</html>')
        res.end()
    }
});

const port = 4000;
server.listen(port , ()=>{
    console.log(`Running port ${port}`)
})