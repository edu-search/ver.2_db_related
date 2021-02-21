const express = require('express');
const mysql = require('mysql');

//Create connectionnodem
const db = mysql.createConnection({
    host     : '35.197.139.148',
    //port     :  3306,
    user     : 'zihao',
    password : 'edusearch',
    database :  'EduSearch'
});

//Connect
db.connect((err) => {
    if (err) throw err;
    console.log('MySql Connected...');
});

const app = express();

//Create BD
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE test_1';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});





//Create post table
//Create student post table
app.get('/create_student_posts_table', (req, res) => {
    let sql = 'CREATE TABLE student_posts_table(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Student posts table created...');
    });
});

//Create tutor post table
app.get('/create_tutor_posts_table', (req, res) => {
    let sql = 'CREATE TABLE tutor_posts_table(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Tutor posts table created...');
    });
});





//Insert into post table
//Insert student post
app.get('/add_student_post', (req, res) => {
    let post = {title:'Student post', body:'This is a student post'};
    let sql = 'INSERT INTO student_posts_table SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Student post added...');
    });
});

//Insert tutor post
app.get('/add_tutor_post', (req, res) => {
    let post = {title:'Tutor post', body:'This is a tutor post'};
    let sql = 'INSERT INTO tutor_posts_table SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Tutor post added...');
    });
});





//Retrieve post tables
//Retrieve student posts
app.get('/get_student_posts', (req, res) => {
    let sql = 'SELECT * FROM student_posts_table';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(result);
    });
});

//Retrieve tutor posts
app.get('/get_tutor_posts', (req, res) => {
    let sql = 'SELECT * FROM tutor_posts_table';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Tutor posts fetched...');
    });
});





//Retrieve a single post
//Select a single student post
app.get('/get_student_posts/:id', (req, res) => {
    let sql = `SELECT * FROM student_posts_table WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('A student post is fetched...');
    });
});

//Select a single tutor post
app.get('/get_tutor_posts/:id', (req, res) => {
    let sql = `SELECT * FROM tutor_posts_table WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('A tutor post is fetched...');
    });
});





//Update a single post
//Update a student post
app.get('/update_student_post/:id', (req, res) => {
    let newTitle = 'Updated Student post';
    let sql = `UPDATE student_posts_table SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Student post updated...');
    });
});

//Update a tutor post
app.get('/update_tutor_post/:id', (req, res) => {
    let newTitle = 'Updated Tutor post';
    let sql = `UPDATE tutor_posts_table SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Tutor post updated...');
    });
});





//Delete post
//Delete student post
app.get('/delete_student_post/:id', (req, res) => {
    let newTitle = 'Updated Student post';
    let sql = `DELETE FROM student_posts_table WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Student post deleted...');
    });
});

//Delete tutpr post
app.get('/delete_tutor_post/:id', (req, res) => {
    let newTitle = 'Updated Tutor post';
    let sql = `DELETE FROM tutor_posts_table WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Tutor post deleted...');
    });
});





//App opened on port...
app.listen('3000', () => {
    console.log('Server started on port 3000');
});