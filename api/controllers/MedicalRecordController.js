/**
 * MedicalRecordController
 *
 * @description :: Server-side logic for managing medicalrecords
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');

module.exports = {
	getMyMedicalRecord: function (req, res, next) {
		var userSessionData = req.session.userData;
		MedicalRecord.find({patientId: userSessionData.id}).populate('patientId').populate('prescriptions').exec(function (error, medicalRecords){
      if(error){
        return next(error);
      }
      res.view('medicalRecords', {
				userData : req.session.userData,
				medicalRecords: medicalRecords,
				moment: moment
			});
  });
	},
	getMedicalRecordById: function (req, res, next) {
		MedicalRecord.findOne({id: req.params.medicalRecordId }).populate('patientId').populate('prescriptions').exec(function (error, medicalRecord){
      if(error){
        return next(error);
      }
      res.view('medicalRecord', {
				userData : req.session.userData,
				medicalRecord: medicalRecord,
				moment: moment
			});
    });
	}
};
