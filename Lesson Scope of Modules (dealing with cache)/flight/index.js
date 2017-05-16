module.exports = function(info){

	var values = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	for(var properties in values){
		if(values[properties] !== 'undefined'){
			values[properties] = info[properties];
		}
	}

	var functions = {
		triggerDepart: function(){
			values.actualDepart = Date.now();
		},
		triggerArrive: function(){
			values.actualArrive = Date.now();
		},
		getInformation: function(){
			return values;
		}

	};
	return functions;
};