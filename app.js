const yargs = require('yargs');
const argv = yargs.options({
	a:{
		describe:'address of the place',
		alias:'address',
		demand:true
	}
}).help().alias('help','h').argv;
var weather = require('./weather/weather');
var geocode = require('./geocode/geocode');
geocode.geocodeAddress(argv.address,(errorMessage,address)=>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(`address of the place is ${JSON.stringify(address,undefined,2)}`);
		weather.getWeather(address.latitude,address.longitude,(errorMess,weatherResult)=>{
			if(errorMess){
				console.log(errorMess);
			}else{
				console.log(JSON.stringify(weatherResult,undefined,2));
			}
		});
		
	}
});