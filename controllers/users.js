var express = require('express');
var url = require('url');
var querystring = require('querystring');
var router = express.Router();
var users = require('../models/db/user');

/* GET users listing. */
router.get('/', function(req, res) {
	var arg = url.parse(req.url).query;
	var user_id = querystring.parse(arg).user_id;
	if(user_id === null || user_id === undefined)
	{
		res.send('Please enter a user id.');
	}
	else
	{
		users.findById(user_id).then(function (user) {
				console.log("Find a user who is " + user.toString());
				res.send(user);
			}
		)
	}
});

module.exports = router;
