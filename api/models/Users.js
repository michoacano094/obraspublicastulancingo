/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysqlOptServer',
  tableName : 'opt_users',
  attributes: {
    name_user:{
        type: 'string'
    },
    email_user:{
        type: 'string'
    },
    password_user:{
        type: 'string'
    },
    active_user:{
        type: 'string'
    }
  }
};

