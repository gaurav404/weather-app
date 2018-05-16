const request = require('request');
const weather = (latitude,longitude,callback)=>{
	request({
		url:`https://api.darksky.net/forecast/f46cc205a8bcd05f663c5638f898f2d2/${latitude},${longitude}`,
		proxy:'http://172.16.30.20:8080',
		JSON:true
	},(error,response,body)=>{
		if(error){
			callback('unable to connect to the server',undefined);
		}else if(response.statusCode===404){
			callback('unable to fetch weather',undefined);
		}else if(response.statusCode===200){
			var res = JSON.parse(body);
			callback(undefined,{
				temperature:res.currently.temperature,
				current:res.currently.apparentTemperature
			});
		}
	})	
}
module.exports.getWeather = weather;
