module.exports = function(info){

	var values ={
		number: null,
		origin: null,
		destination: null,
		arrives: null,
		departs: null,
		actualArrives: null,
		actualDeparts: null
	};

	for(var properties in values){
		if(values[properties] !== 'undefined'){
			values[properties]  = info[properties];
		};
	};

	var functions = {
		triggerDepart: function(){
			values.actualDeparts = Date.now();
		},
		triggerArrives: function(){
			values.actualArrives = Date.now()
		},
		getInformation: function(){
			return values;
		}
	};

	return functions;
};