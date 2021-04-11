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
    res.end();
});

app.post("/api/createuser", (req, res)=>{
    const userName = req.body.userName
    const password = req.body.password
    const email = req.body.email

    //query
    const createUser = 'call create_user(?,?,?,0)'
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
        console.log(result);
        res.send(result);
        res.end();
    })
});

app.post("/api/getgoals", (req,res)=>{
    const id = req.body.id

    const getgoals = 'call get_goals(?)'
    db.query(getgoals,[id],(err, result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
});

app.post("/api/createGoals", (req, res)=>{
    const mspend = req.body.mspend
    const dspend = req.body.dspend
    const msave = req.body.msave
    const dsave = req.body.dsave
    const userID = req.body.userID
    const creategoals = 'call create_goals(?,?,?,?,?)'
    db.query(creategoals,[mspend,dspend,msave,dsave,userID],(err, result)=>{
        console.log(result);
        res.end();
    })
});

app.post("/api/delGoals", (req,res)=>{
    const userid = req.body.userid

    const delgoals = "call delete_goals(?)"

    db.query(delgoals,[userid],(err,result)=>{
        console.log(result);
        res.end();
    })
});

app.post("/api/gethistory", (req,res)=>{
    const date = req.body.date
    const userid = req.body.userid
    console.log(date);
    const gethistory = "call get_history(?,?)"

    db.query(gethistory,[date, userid],(err,result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
});

app.post("/api/gethistorymain", (req,res)=>{
    const userid = req.body.userid
    const gethistory = "call get_history_main(?)"

    db.query(gethistory,[userid],(err,result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
});

app.post("/api/addtohistory", (req,res)=>{
    const userid = req.body.userid
    const date = req.body.date
    const aspent = req.body.aspent
    const asaved = req.body.asaved

    const addhistory = "call add_history(?,?,?,?)"

    db.query(addhistory,[userid, date, aspent, asaved],(err,result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
});

app.post("/api/gethistorymonth", (req,res)=>{
    const userid = req.body.userid
    const monthno = req.body.monthno

    console.log(monthno);
    const gethistory = "call get_history_month(?,?)"

    db.query(gethistory,[userid,monthno],(err,result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
});

app.post("/api/deletelog", (req,res)=>{
    const userid = req.body.userid
    const date = req.body.date

    const deletelog = "call del_log(?,?)"

    db.query(deletelog, [userid, date], (err, result)=>{
        console.log(err);
        res.end();
    })
}),

app.post("/api/gettotal", (req,res)=>{
    const userid = req.body.userid

    const total = "call get_total(?)"

    db.query(total, [userid], (err, result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
}),

app.post("/api/countmonth", (req,res)=>{
    const userid = req.body.userid
    const monthno = req.body.monthno

    const monthcount = "call count_month(?,?)"

    db.query(monthcount, [userid,monthno], (err, result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
}),

app.post("/api/counttotal", (req,res)=>{
    const userid = req.body.userid

    const totalcount = "call count_total(?)"

    db.query(totalcount, [userid], (err, result)=>{
        console.log(result);
        res.send(result);
        res.end();
    })
})

app.listen(3001, ()=> {
    console.log("running on port 3001");
})