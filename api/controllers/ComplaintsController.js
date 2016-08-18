/**
 * ComplaintsController
 *
 * @description :: Server-side logic for managing complaints
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req,res) {
        if(req.method == "GET"){
            var type=0;
            switch(req.query.show){
                case 'baches':
                    type=2;
                    break;
                case 'alumbrado':
                    type=1;
                    break;
                case 'obras':
                    type=3;
                    break;
                case 'otros':
                    type=4;
                    break;
            }
        }
        Complaints.find({id_complaint_type:type}).exec(function (err,params){
            return res.view({complaints: params});
        })
    },
};

