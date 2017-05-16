var whispher = function(message){
	console.log('proclaiming : '+ message);
}

exports.softly = whispher;

exports.loudly = function(message){
	console.log('PROCLAIMING : '+ message);
}