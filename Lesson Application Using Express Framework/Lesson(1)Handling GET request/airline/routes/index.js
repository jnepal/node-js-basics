
var flights = require('../flight');

var flight1 = flights({
	number: 1,
	origin: 'Texas',
	destination: 'Miami',
	departs: '9AM',
	arrives: '10AM'
});

var flight2 = flights({
	number: 2,
	origin: 'Los Angeles',
	destination: 'Okhlama City',
	departs: '10AM',
	arrives: '11AM'
});
/*
 * GET home page.
 */

exports.flight1 = function(req, res){
  res.json(flight1.getInformation());
};
exports.flight2 = function(req, res){
  res.json(flight2.getInformation());
};