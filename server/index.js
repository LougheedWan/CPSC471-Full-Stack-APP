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
    database: '471db',
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.post("/api/insert", (req, res)=>{
    const userName = req.body.userName
    const password = req.body.password
    const email = req.body.email

    //query
    const createUser = 'INSERT INTO users (username, password, email) VALUES (?,?,?)'
    db.query(createUser, [userName, password, email], (err, result)=>{
        console.log(result);
    })
})
app.listen(3001, ()=> {
    console.log("running on port 3001");
})