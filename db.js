var mongoose = require('mongoose');

mongoose.connect('mongodb://taranagupta:Anikait732@ds053828.mongolab.com:53828/decodedelhi');
//mongodb://<dbuser>:<dbpassword>@ds053828.mongolab.com:53828/decodedelhi

module.exports = mongoose.connection;

console.log("probably connected");
