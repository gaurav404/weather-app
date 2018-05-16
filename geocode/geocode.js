const request = require('request');
var geocodeAddress = (address,callback)=>{
	var address = encodeURIComponent(address);
	request({
		url:`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
		'proxy':'http://172.16.30.20:8080',
		JSON:true
	},(error,response,body)=>{
		if(error){
			callback("check your internet",undefined);
		}else if(body.status==='ZERO_RESULTS'){
			callback('address invalid',undefined);
		}else if(res.status==='OK'){
			var res = JSON.parse(body);
			callback(undefined,{
				address:res.results[0].formatted_address,
				latitude:res.results[0].geometry.location.lat,
				longitude:res.results[0].geometry.location.lng
			});
		}
	})
}
module.exports.geocodeAddress = geocodeAddress;