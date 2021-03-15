const express = require('express');
//const cors = require('cors');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crud_db', //change
});



app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(3001, ()=> {
    console.log("running on port 3001");
})