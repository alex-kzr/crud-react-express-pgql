const express = require('express');
const db = require('./database');

const app = express();

app.get('/', function(req, res){
    db.select().from('users').orderBy('id').then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    });
});

app.listen('3000');