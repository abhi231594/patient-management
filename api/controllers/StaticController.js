/**
 * StaticController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getStaticPage: function(req, res) {
		res.view('loremIpson',{
			userData : req.session.userData
		});
	}
};
