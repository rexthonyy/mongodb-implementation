const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
	let id = req.body.id;
	let name = req.body.name;

	 User.find({ $or: [{ id: id }, { name: name }] }, async (err, doc) => {
        if(err) {
            res.json(err);
        } 
        if(doc == null){
            res.json({ status: 'User does not exist' });
        }else{
        	doc.forEach(user => {
        		user.remove();
        	});

            res.json({ status: 'Entry deleted' });
        }
    });
});

module.exports = router;