const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
	let id = req.body.id;
	let name = req.body.name;

	const user = new User({
		id: id,
		name: name
	});

	try{
		await user.save();
		console.log("entry added");
		res.status(201).json({ status: 'success entry created'});
	}catch(err){
		res.status(500).json({ status: 'Failed to create entry' });
	}
});

module.exports = router;