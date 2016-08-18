/**
 * Auth.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
    connection: 'mysqlOptServer',
    tableName : 'opt_users',
    attributes: {
        id_user: {
          type: 'integer',
          primaryKey: true,
          unique: true
        },
        email_user: {
            type: 'email',
            required: true,
            unique: true
        },
        name_user: {
            type: 'string',
            required: true
        },
        password_user: {
            type: 'string',
            required: true
        },
        id_user_type: {
            type: 'integer',
            required: true
        },
        active_user: {
            type: 'integer'
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password_user;
            return obj;
        }
    },
    beforeCreate: function(auth, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(auth.password_user,salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    console.log("Se guardo: "+hash);
                    auth.password_user = hash;
                    cb();
                }
            });
        });
    }
};

