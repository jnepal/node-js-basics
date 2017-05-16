var flight = require('./flight');

flight.setNumber(123);
flight.setOrigin('Texas');
flight.setDestination('Illinois');

console.log(flight.getInfo());

var anotherFlight = require('./flight');
/*If the variable another flight is not setted then returns the initial cache info of the flight function i.e of flight */
anotherFlight.setNumber(456);
anotherFlight.setOrigin('Las Vegas');
anotherFlight.setDestination('Texas')

console.log(anotherFlight.getInfo());