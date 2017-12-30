/**
 * PrescriptionAccessController
 *
 * @description :: Server-side logic for managing prescriptionaccesses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	updateStatus: function (req, res, next) {
		var userSessionData = req.session.userData;
		var prescriptionAccessId= req.params.id;
		var newStatus = req.body.status;
		PrescriptionAccess.update({ id:prescriptionAccessId },{approvalStatus: newStatus}).exec(function (err, prescriptionAccess) {
		 if (err) {
			 return res.send(err);
		 }
		 if (!prescriptionAccess) {
			 return res.send({
				 message: 'not Found'
			 });
		 }
		 res.send(prescriptionAccess);
	 });
 },
 getPrescriptionAccess: function (req, res, next) {
	 var userSessionData = req.session.userData;
	 var newRequest = {
		 prescriptionAccessedBy: userSessionData.id,
		 prescriptionId: req.params.id
	 }
	 PrescriptionAccess.create(newRequest).exec(function (err, prescriptionAccess) {
		if (err) {
			return res.send(err);
		}
		res.send(prescriptionAccess);
	});
 }
};
