const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function(req, res){
    db.select().from('users').then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    });
});

module.exports = router; 