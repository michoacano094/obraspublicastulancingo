/**
 * Complaints.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysqlOptServer',
  tableName : 'opt_complaint',
  attributes: {
    desc_complaint:{
        type: 'string'
    },
    id_complaint_type:{
        type: 'integer'
    },
    img_complaint:{
        type: 'string'
    },
    lat_complaint:{
        type: 'string'
    },
    lon_complaint:{
        type: 'string'
    },
    date_complaint:{
        type: 'string'
    },
    like_complaint:{
        type: 'string'
    }
  }
};

