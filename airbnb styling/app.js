// Core Module
const path = require('path');

// External Module
const express = require('express');


// Local Module
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

// ✅ body parser
app.use(express.urlencoded());

// ✅ SERVE STATIC FILES FIRST
app.use(express.static(path.join(rootDir, 'public')));

// ✅ THEN routes
app.use(userRouter);
app.use(hostRouter);

// ✅ 404 page
app.use((req, res) => {
  res.status(404).render('404', {pagetitle: 'Page Not Found'}); });


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
