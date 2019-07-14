export default {
	
	// get browser geo location
	getBrowserLatLngPromise : function() {
		return new Promise(function(resolve, reject) {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					resolve({
						latitude : position.coords.latitude,
						longitude : position.coords.longitude
					});
				}, function() {
					reject(new ambrtb.CLASS.AMBRTB_ERROR({
						code : -1,
						message : "Could not get browser geolocation."
					}));
				});
			} else {
				reject(new ambrtb.CLASS.AMBRTB_ERROR({
					code : -1,
					message : "Geolocation is not supported."
				}));
			}
		});
	},

};

