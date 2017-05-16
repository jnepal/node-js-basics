var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
	myArtwork = [];
	myArtist = [];

	myArtist = data.speakers;
	data.speakers.forEach(function(item){
		myArtwork = myArtwork.concat(item.artwork);	
	});
	res.render('index', { 
		title: 'Home',
		artwork: myArtwork,
		artist: myArtist,
		page: 'home'
	 });
});

/* GET Speaker page */
router.get('/speakers', function(req, res) {
	myArtwork = [];
	myArtist = [];

	myArtist = data.speakers;
	data.speakers.forEach(function(item){
		myArtwork = myArtwork.concat(item.artwork);	
	});
	res.render('speakers', { 
		title: 'Speakers',
		artwork: myArtwork,
		artist: myArtist,
		page: 'speakerList'
	 });
});

/* GET Specified Speaker Detail page */
router.get('/speakers/:name', function(req, res) {
	//var name = req.params.name;
	var name = req.param('name');
	myArtwork = [];
	myArtist = [];
	data.speakers.forEach(function(item){
		if(item.shortname === name){
			myArtist.push(item);
			myArtwork = myArtwork.concat(item.artwork);
		}
			
	});
	res.render('speakers', { 
		title: 'Speakers',
		artwork: myArtwork,
		artist: myArtist,
		page: 'speakerDetail'
	 });
});

module.exports = router;
