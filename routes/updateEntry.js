const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', (req, res) => {
	let id = req.body.id;
	let name = req.body.name;

	 User.findOne({ id: id }, 'name', async (err, doc) => {
        if(err) {
            res.json({ status: err });
        } 
        if(doc == null){
            res.json({ status: 'ID does not exist'});
        }else{
        	doc.name = name;

        	try{
				await doc.save();
				console.log("entry updated");
				res.status(201).json({ status: 'success entry updated'});
			}catch(err){
				res.status(500).json({ status: 'Failed to update entry' });
			}
        }
    });

	
});

module.exports = router;