const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');


const app = express();

//connect db
mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
    console.log('DB connected successfuly'); // sil
});

//template engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//routes
app.use('/', pageRoute);
app.use('/courses', courseRoute)

const port = 1004;

app.listen(port, (req, res) => {
    console.log(`App started on port ${port}`);
})