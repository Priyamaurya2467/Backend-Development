const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* middleware*/

app.use((req, res, next) => {
    console.log("first middleware");
    next();
});

app.use((req, res, next) => {
    console.log("second middleware");
    next();
});

/* home page */
app.get("/", (req, res) => {
    console.log("Handling / for GET", req.url, req.method);
    res.send(`
        <h1>Welcome</h1>
        <button><a href="/contact-us">Contact Button</a></button>
    `);
});

/* contact form */
app.get("/contact-us", (req, res) => {
    console.log("Handling /contact-us for GET", req.url, req.method);
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple Form</title>
        </head>
        <body>
            <h2>User Form</h2>

            <form action="/contact-us" method="POST">
                <label>Name:</label><br>
                <input type="text" name="name" required><br><br>

                <label>Email:</label><br>
                <input type="email" name="email" required><br><br>

                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});


app.use(bodyParser.urlencoded())
/* handle form submit */
app.post("/contact-us", (req, res) => {
    console.log("Handling /contact-us for POST");
    console.log(req.body)

    res.send(`
        <h1>Thanks ${req.body.name}!</h1>
        <p>Email received: ${req.body.email}</p>
    `);
});

/* server */
const port = 3003;
app.listen(port)
