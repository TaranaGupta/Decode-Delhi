var mongoose = require('mongoose');

module.exports = mongoose.model('InstagReport', {

	objType: String,
	location: {name: String, longitude: Number, latitude: Number},
	reportType: String, //'besafe', 'knowmore', 'besmart'
	imgUrl: String,
	userInfo: {userName: String, userPicUrl: String},
	caption: String,
	numOfComments: Number

});