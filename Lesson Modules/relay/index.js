prefix = 'Relaying : '; //Global Variable can be overidden
//var prefix = 'Relaying'; Local Variable can't be overridden
module.exports = function(relay){
	console.log(prefix + relay);
}