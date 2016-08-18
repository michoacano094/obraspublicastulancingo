/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },
    register: function (req, res) {
        var params = {email_user: req.body.email_user, name_user: req.body.name_user, password_user: req.body.password_user, id_user_type: req.body.id_user_type};
    
        Auth.create(params).exec(function(err, user) {
            console.log(user);
            if (err) {
                res.serverError(err);
            }
            else {
                res.redirect("/login");
            }
        });
    },

    login: function(req, res) {
         passport.authenticate('local', {failureRedirect: '/login'}, function (err, user, response) {
            if (err) {
               res.json({message: err});
            }
        
            if (user) {
                res.json(response);
            }
            else {
                res.json({message: 'Bad username/password combination'});
            }
        })(req, res);
        /*passport.authenticate('local', function(err, auth, info) {
            if ((err) || (!auth)) {
                return res.send({
                    message: info.message,
                    auth: auth
                });
            }
            req.logIn(auth, function(err) {
                if (err) res.send(err);
                return res.send({
                    message: info.message,
                    auth: auth
                });
            });

        })(req, res);*/
        
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

