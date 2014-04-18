var mongoose = require('mongoose');

module.exports = mongoose.model('BeSafeReport', {

	objType: String,
	gender: String,
	age: Number,
	location: {name: String, longitude: Number, latitude: Number},
	incidentType: String, //type of harrasment
	//imgUrl: String,
	//userInfo: {userName: String, userPicUrl: String}
	story: String

});