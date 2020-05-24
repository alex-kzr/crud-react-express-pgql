const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function(req, res){
    db.select().from('users').then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
    });
});

router.post('/', function(req, res){
    db.insert(req.body).returning('*').into('users').then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
    });    
});

router.patch('/:id', function(req, res){
    db('users').where({ id: req.params.id }).update(req.body).returning('*').then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
    });
});

module.exports = router; 