var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db;
MongoClient.connect('mongodb://cbeck:letmeinpls@ds039195.mlab.com:39195/hackoutfest', function(err, database) {
	if (err) {
		throw err;
	}
	db = database;

	router.post('/search', function(req, res, next) {
		//res.send("wazzup?");
		res.send(req.body.name);
		// var _user = req.body.name.toObject();
		// db.collection('users').save(_user, function(err, result) {
		// 	if (err) {
		// 		throw err;
		// 	}

		// 	console.log('saved to database');
		// 	res.send('Success!(?)');
		// });
	});
});
module.exports = router;


/*
router.get('/search', function(req, res, next) {
	res.send();
});

var http = require('http');
var options = {
	host: "api.setlist.fm",
	path: "/rest/0.1/search/setlists.json?artistName='Duvchi'"
};

// http://api.setlist.fm/rest/0.1/search/setlists.json?artistName='Duvchi'

var req = http.get(options, function(res) {
	var bodyChunks = [];
	res.on('data', function(chunk) {
		bodyChunks.push(chunk);
	}).on('end', function() {
		var body = Buffer.concat(bodyChunks);
		console.log('BODY: ' + body);
	})
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
*/
/*
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
	if (err) {
		throw err;
	}
	db.collection('restaurants').find().toArray(function(err, result) {
		if (err) {
			throw err;
		}
		res.json(result);
	});
});
*/
