const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');


const app = express();

//connect db
mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
    console.log('DB connected successfuly');
});

//template engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/', pageRoute);
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)

const port = 1004;

app.listen(port, (req, res) => {
    console.log(`App started on port ${port}`);
})