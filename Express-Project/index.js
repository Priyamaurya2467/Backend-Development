const express = require("express");
require("dotenv").config();
let app = express();

console.log(process.env.my_token)

app.use(express.json());

const checkToken = (req, res, next) => {
    if (!req.query.token) {
        return res.status(401).json({
            status: 0,
            msg: "input token"
        });
    }
    next();
};
app.use(checkToken)
// Public routes
app.get('/', (req, res) => {
    res.json({ status: 1, msg: "home page api" });
});

app.post('/login', (req, res) => {
    res.status(200).json({
        status: 1,
        msg: "login page api",
        bodydata: req.body,
        queryData: req.query
    });
});

// Protected routes
app.get('/news', checkToken, (req, res) => {
    res.json({ status: 1, msg: "news page api" });
});

app.get('/news/:id', checkToken, (req, res) => {
    res.send("News Details API " + req.params.id);
});

app.get('/product', checkToken, (req, res) => {
    res.json({ status: 1, msg: "product page api" });
});

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
