/**
 * PrescriptionController
 *
 * @description :: Server-side logic for managing prescriptions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');

module.exports = {
	getMyPrescriptionRecord: function (req, res, next) {
		var userSessionData = req.session.userData;
		Prescription.find({prescribedForId: userSessionData.id}).populate('medicalRecordId').populate('prescribedById').populate('prescribedForId').exec(function (error, prescriptions){
      if(error){
        return next(error);
      }
      res.view('prescriptions', {
				userData : req.session.userData,
				prescriptions: prescriptions,
				moment: moment
			});
    });
	},
	getPrescriptionRecordById: function (req, res, next) {
		var userSessionData = req.session.userData;
		var accessProvided = true;
		Prescription.findOne({id: req.params.prescriptionId}).populate('medicalRecordId').populate('prescribedById').populate('prescribedForId').exec(function (error, prescription){
      if(error){
        return next(error);
      }
			if(!prescription) {
				return res.view('prescription', {
					accessProvided: accessProvided,
					userData : req.session.userData,
					prescription: prescription,
					moment: moment
				});
			}
			var prescribedForId = prescription.prescribedForId.id;
			if(userSessionData.id == prescribedForId) {
				return res.view('prescription', {
					accessProvided: accessProvided,
					userData : req.session.userData,
					prescription: prescription,
					moment: moment
				});
			} else {
				PrescriptionAccess.findOne({
					prescriptionAccessedBy: userSessionData.id,
					prescriptionId: req.params.prescriptionId,
					approvalStatus: '3'
				}).exec(function (error, prescriptionAccess){
					if(error){
		        return next(error);
		      }
					if(!prescriptionAccess) {
						accessProvided = false;
					}
					return res.view('prescription', {
						accessProvided: accessProvided,
						userData : req.session.userData,
						prescription: prescription,
						moment: moment
					});
				});
			}
    });
	},
	getAllPrescriptionRecord: function (req, res, next) {
		Prescription.find().populate('medicalRecordId').populate('prescribedById').populate('prescribedForId').exec(function (error, prescriptions){
	    if(error){
	      return next(error);
	    }
	    res.view('get-prescription-access', {
				userData : req.session.userData,
				prescriptions: prescriptions,
				moment: moment
			});
	  });
	}
};
