

var BeSafeSchema = require('../schemas/BeSafeReport');
var InstagSchema = require('../schemas/InstagReport');



module.exports = function (reports){

	var aReport = new BeSafeSchema(reports[1]);

	//trying to save a report
	aReport.save(function(err){

		if(err){
			console.log(err);

		} else{
			console.log("might have save succesfully, can't tell for sure :D");

		}

	});

	//see if we can get data back from the database
	BeSafeSchema.find({gender: "F"}, 'incidentType story', function(err, foundReports){

		if(err){
			console.error(err);
		}

		if(foundReports == null){
			
			console.log("No reports found");

		} else{
			console.log("found " + foundReports.length + " be safe reports");

			for(r in foundReports){
				console.log(foundReports[r]);
			}

		}






	});


}