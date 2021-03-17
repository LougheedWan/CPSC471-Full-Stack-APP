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

app.post("/api/createuser", (req, res)=>{
    const userName = req.body.userName
    const password = req.body.password
    const email = req.body.email

    //query
    const createUser = 'call create_user(?,?,?)'
    db.query(createUser, [userName, password, email], (err, result)=>{
        console.log(result);
        res.end();
    })
});

app.post("/api/sendForUser", (req, res) => {
    const userName = req.body.userName

    //query for auth
    const authuser = 'call auth_user(?)'
    console.log(authuser);
    db.query(authuser, [userName],(err, result) =>{
        console.log(err);
        res.send(result);
        res.end();
    })
});
app.listen(3001, ()=> {
    console.log("running on port 3001");
})