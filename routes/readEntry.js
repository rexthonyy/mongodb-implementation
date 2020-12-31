const express = require("express");
const router = express.Router();
const User = require('../models/user');

router.post('/', (req, res) => {
    User.find({}, (err, doc) => {
        if(err) {
            res.json({ status: 'failed', error: err });
        } 
        if(doc == null){
            res.status(404).json({ status: 'failed', error: 'contact not found'});
        }else{
        	console.log("read entries");
        	res.status(200).json({ status: 'success', users: doc });
        }
    });
});

module.exports = router;