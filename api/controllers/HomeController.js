/**
 * HomeController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');

module.exports = {
	indexPage: function(req, res) {
		var userSessionData = req.session.userData;
		if(userSessionData) {
			//get all the prescriptions for loggedin user then check for these Id in Prescription access Table
			Prescription.find({prescribedForId: userSessionData.id}).exec(function (error, prescriptions){
	      if(error){
	        return next(error);
	      }
				var listOfPrescriptions = prescriptions.map(function(prescription){
					return prescription.id
				});
				PrescriptionAccess.find({ prescriptionId : listOfPrescriptions })
													.populate('prescriptionAccessedBy')
													.populate('prescriptionId')
													.populate('approvalStatus')
				.exec(function (error, prescriptionAccess){
					if(error){
						return next(error);
					}
					res.view('homepage',{
						prescriptionAccess: prescriptionAccess,
						userData : req.session.userData,
						moment: moment
					});
				});
	    });
		} else {
			res.view('homepage',{
				userData : req.session.userData,
				moment: moment
			});
		}
  }
};
