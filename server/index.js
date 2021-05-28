const express = require('express');
const mysql = require('mysql');
var cors = require('cors')
var app = express()
 
app.use(cors());
app.use(express.json());
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"TODO",
});

connection.connect((err,result)=>{
    if(err){
        throw err;
    }
    console.log("CONNECTION ESTABISHED");
});

//getting all todos
app.get('/todo',(req,res)=>{
    const sqlQuery = "SELECT * FROM todoData";
    connection.query(sqlQuery,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});
//insert a todo
app.post('/todo',(req,res)=>{
    const {description} = req.body;
    const sqlQuery = "insert INTO todoData(des) VALUES (?)";
    connection.query(sqlQuery,[description],(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
    // const sqlQuery = 
})
//deleting a todo
app.delete('/todo/:id',(req,res)=>{
    const {id} = req.params;
    const sqlQuery = "DELETE FROM todoData WHERE ID=(?)";
    connection.query(sqlQuery,[id],(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
})
//updataing a todo
app.put('/todo/:id',(req,res)=>{
    const {id} = req.params;
    const {description} = req.body;
    const sqlQuery = "UPDATE todoData SET des=(?) WHERE id=(?)";
    connection.query(sqlQuery,[description,id],(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
})
const PORT=5000;
    app.listen(PORT,(req,res)=>{
});

app.get('/',(req,res)=>{
    res.send(`server is up and runing on port ${PORT}`)
});
