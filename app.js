const express = require('express');
const pageRoute = require('./routes/pageRoute')

const app = express();

//template engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//routes
app.use('/', pageRoute)

const port = 1004;

app.listen(port, (req, res) => {
    console.log(`App started on port ${port}`);
})

