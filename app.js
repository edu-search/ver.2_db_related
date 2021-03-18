const express = require('express');
const mysql = require('mysql');
//const Pool = require('pg').Pool;
var PORT = process.env.PORT || 3000;

//Create connection
// const db = mysql.createConnection({
//     host     : 'us-cdbr-east-03.cleardb.com',
//     port     :  3306,
//     user     : 'b65ad79c00955a',
//     password : '5dbd3aaa',
//     database :  'heroku_7cb47379603c84e',
// });

var pool = mysql.createPool({
    host     : 'us-cdbr-east-03.cleardb.com',
    port     :  3306,
    user     : 'b65ad79c00955a',
    password : '5dbd3aaa',
    database :  'heroku_7cb47379603c84e'
});

exports.pool = pool;

//Connect
// db.connect((err) => {
//     if (err) throw err;
//     console.log('MySql Connected...');
// });

const app = express();

//Insert into post table
//Insert student post
app.get('/add_student_post', (req, res) => {
    let post = {user_id:'123456', name:'zihao', contact:'88888888', grade_id:'9', location_id:'1', price:'$50/h', subject_id:'3', description:'hello this is a test '};
    let sql = 'INSERT INTO student_post SET ?';
    let query = pool.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Student post added...');
    });
});

// //Insert tutor post
app.get('/add_tutor_post', (req, res) => {
    let post = {user_id: '654321', name:'Ben Leong', location_id: '1'};
    let sql = 'INSERT INTO tutor_post SET ?';
    let query = pool.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Tutor post added...');
    });
});



//Retrieve post tables
//Retrieve student posts
app.get('/get_student_post', (req, res) => {
    let sql = 'SELECT * FROM student_post';
    let query = pool.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(result);
    });
});

//Retrieve tutor posts
app.get('/get_tutor_post', (req, res) => {
    let sql = 'SELECT * FROM tutor_post';
    let query = pool.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Tutor posts fetched...');
    });
});



//Retrieve a single post
//Select a single student post
app.get('/get_student_post/:id', (req, res) => {
    let sql = `SELECT * FROM student_post WHERE id = ${req.params.id}`;
    let query = pool.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('A student post is fetched...');
    });
});

//Select a single tutor post
app.get('/get_tutor_post/:id', (req, res) => {
    let sql = `SELECT * FROM tutor_post WHERE id = ${req.params.id}`;
    let query = pool.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('A tutor post is fetched...');
    });
});



//Update a single post
//Update a student post
app.get('/update_student_post/:id', (req, res) => {
    let newTitle = 'Updated Student post';
    let sql = `UPDATE student_post SET name = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = pool.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Student post updated...');
    });
});

//Update a tutor post
app.get('/update_tutor_post/:id', (req, res) => {
    let newTitle = 'Updated Tutor post';
    let sql = `UPDATE tutor_post SET name = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = pool.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Tutor post updated...');
    });
});



//Delete post
//Delete student post
app.get('/delete_student_post/:id', (req, res) => {
    let newTitle = 'Updated Student post';
    let sql = `DELETE FROM student_post WHERE id = ${req.params.id}`;
    let query = pool.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Student post deleted...');
    });
});

//Delete tutpr post
app.get('/delete_tutor_post/:id', (req, res) => {
    let newTitle = 'Updated Tutor post';
    let sql = `DELETE FROM tutor_post WHERE id = ${req.params.id}`;
    let query = pool.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Tutor post deleted...');
    });
});



//App opened on port...
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});