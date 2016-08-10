var express			=	require("express");
var bodyParser		=	require("body-parser");
var app				=	express();
var MongoClient 	=	require('mongodb').MongoClient;
var ObjectId 		=	require('mongodb').ObjectID;
var assert			=	require('assert');
var http			=	require('http');
var dependencies	=	require('./dependencies.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res) {
	res.send("Hej, världen!");
});

app.listen(3000, function() {
	console.log("Started on PORT 3000");
})

var db;
MongoClient.connect(dependencies.db, function(err, database) {
	if (err) { throw err; }
	db = database;

	app.post('/login', function(req,res) {
		var input = req.body;
		var user = {name:input.user, pass:input.password, knows:[], visited:[]};
		db.collection('users').save(user, function(err, result) {
			if (err) { throw err; }
			console.log('saved user to database');
		});
		res.end();
	});

	app.post('/add_concert', function(req,res) {
		var input = req.body;
		var new_concert = {artist:input.name, venue:input.venue, city:input.city, country:input.country, date:input.date};
		db.collection('concerts').save(new_concert, function(err, result) {
			if (err) { throw err; }
			console.log('saved concert to database');
		});
		res.end();
	});

	app.post('/user_visited', function(req,res) {
		var input = req.body;
		db.collection('users').updateOne(
			{'_id': ObjectId(input.user_id)},
			{
				$push: {"visited": {"concert_id":input.concert_id, "rating":input.rating}}
			}, function(err, result) {
			if (err) { throw err; }
			console.log('updated users visited concerts');
		});
		res.end();
	});

	app.post('/add_friend', function(req,res) {
		var input = req.body;

		if (friend_id != null) {
			db.collection('users').updateOne(
				{'name':input.name},
				{
					$push: {"knows": friend_id}
				}, function(err, result) {
				if (err) { throw err; }
				console.log('updated users friends');
			});
		} else {
			console.log('could not find user');
		}
		res.end();
	});

	app.get('/me', function(req,res) {
		var cursor = db.collection('users').find( { '_id': ObjectId('57aac15feb36b61a2031df37') } );
		cursor.each(function(err, doc) {
			assert.equal(err, null);
			if (doc != null) {
				res.json(doc);
			} else {
				res.json();
			}
		});
	});

	app.get('/me/concerts', function(req,res) {
		var concerts_visited = [];
		var cursor = db.collection('users').find( { '_id': ObjectId('57aac15feb36b61a2031df37') } );

		cursor.each(function(err, doc) {
			assert.equal(err, null);
			if (doc != null) {
				concerts_visited = doc.visited;
			} else {
				var result = [];
				var counter = 0;
				for (var concert in concerts_visited) {
					(function (concert_id, score) {
						cursor = db.collection('concerts').find( { '_id': ObjectId(concert_id) } );
						cursor.each(function(err, concert_info) {
							assert.equal(err, null);
							if (concert_info != null) {
								concert_info.rating = score;
								result.push(concert_info);
							} else {
								counter++;
								if (counter >= concerts_visited.length) {
									res.json(result);
								}
							}
						});
					})(concerts_visited[concert].concert_id, concerts_visited[concert].rating)
				}
			}
		});
	});

	app.get('/me/friends', function(req,res) {
		var friends_names = [];
		var cursor = db.collection('users').find( { '_id': ObjectId('57aac15feb36b61a2031df37') } );

		var friends;
		cursor.each(function(err, doc) {
			assert.equal(err, null);
			if (doc != null) {
				friends = doc.knows;
			} else {
				var counter = 0;
				for (var iterator in friends) {
					friend_id = friends[iterator];
					cursor = db.collection('users').find( { '_id': ObjectId(friend_id) } );
					cursor.each(function(err, friend) {
						assert.equal(err, null);
						if (friend != null) {
							friends_names.push(friend.name);
						} else {
							counter++;
							if (counter >= (friends.length-1)) {
								res.json(friends_names);
							}
						}
					});
				}
			}
		});
	});


	app.get('/users', function(req,res) {
		var users = [];
		var cursor = db.collection('users').find();
		cursor.each(function(err, doc) {
			assert.equal(err, null);
			if (doc != null) {
				users.push(doc);
			} else {
				res.json(users);
			}
		});
	});

	app.get('/concerts', function(req,res) {
		var users = [];
		var cursor = db.collection('concerts').find();
		cursor.each(function(err, doc) {
			assert.equal(err, null);
			if (doc != null) {
				users.push(doc);
			} else {
				res.json(users);
			}
		});
	});

	app.post('/search', function(req,res) {
		var cursor = db.collection('concerts').find( { 'artist': req.body.artist } );
		cursor.each(function(err, doc) {
			assert.equal(err, null);
			if (doc != null) {
				console.log(doc._id);
				res.json(doc);
			} else {
				res.json();
			}
		});
	});
});