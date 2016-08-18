var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt');

passport.serializeUser(function(auth, done) {
    done(null, auth.id_user);
});

passport.deserializeUser(function(id_user, done) {
    auth.findOne({ id_user: id_user } , function (err, auth) {
        done(err, auth);
    });
});

passport.use(new LocalStrategy({
    authnameField: 'email_user',
    passwordField: 'password_user'
  },
  function(email_user, password_user, done) {
    console.log("Passport 1 : "+password_user);
    auth.findOne({ email_user: email_user }, function (err, auth) {
      if (err) { return done(err); }
      if (!auth) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      console.log("Passport 2 : "+password_user+" COMPARADO CON "+auth.password_user+" ");
      bcrypt.compare(password_user, auth.password_user, function (err, res) {
        
          if (!res)
            return done(null, false, {
              message: 'Invalid Password'
            });
          var returnauth = {
            email_user: auth.email_user,
            createdAt: auth.createdAt,
            id_user: auth.id_user
          };
          return done(null, returnauth, {
            message: 'Logged In Successfully'
          });
        });
    });
  }
));