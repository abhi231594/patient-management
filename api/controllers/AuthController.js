/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {
	loginPage: function(req, res) {
		if(req.session.userData ) {
			res.redirect('/');
		} else {
	    res.view('login');
		}
  },
	login: function(req, res) {
		if(req.session.userData ) {
			res.redirect('/');
		} else {
	    passport.authenticate('local', function(err, user, info) {
	      if ((err) || (!user)) {
	        return res.send({
	          message: info.message,
	          user: user
	        });
	      }
	      req.logIn(user, function(err) {
	        if (err) res.send(err);
					req.session.userData = user;
					res.redirect('/');
	      });
	    })(req, res);
		}
  },
	signupPage: function(req, res) {
		if(req.session.userData ) {
			res.redirect('/');
		} else {
	    res.view('signup');
		}
  },
	signup: function (req, res) {
		if(req.session.userData ) {
			res.redirect('/');
		} else {
			var userData = {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			};
		  User.create(userData).exec(function (err, user) {
		    if (err) return res.negotiate(err);
		    req.login(user, function (err){
		      if (err) return res.negotiate(err);
					req.session.userData = user;
		      return res.redirect('/');
		    });
		  });
		}
	},
  logout: function(req, res) {
    req.logout();
		req.session.userData = null;
    res.redirect('/');
  }
};
