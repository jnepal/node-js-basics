var flights = require('../data');
var flight = require('../flight');

for(var number in flights){
	 flights[number] = flight(flights[number]);
}
/*
 * GET home page.
 */

exports.flight = function(req, res){
	var number = req.param('number');
	if(typeof flights[number] === 'undefined'){
		res.status(404).json({status:404});
	}else{
		res.json(flights[number].getInformation());
	}
	
};
