const express = require('express');


const app = express();

//router
app.get('/', (req, res) => {
    res.status(200).send("Index page")
})

const port = 1004;

app.listen(port, (req, res) => {
    console.log(`App started on port ${port}`);
})

