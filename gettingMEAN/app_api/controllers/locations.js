var mongoose = require('mongoose');
var Loc = mongoose.model('Location');
var theEarth = (function(){
    var earthRadius = 6371; // km, miles is 3959
    var getDistanceFromRads = function(rads) {
        return parseFloat(rads * earthRadius);
    };
    var getRadsFromDistance = function(distance) {
        return parseFloat(distance / earthRadius);
    };
    return {
        getDistanceFromRads : getDistanceFromRads,
        getRadsFromDistance : getRadsFromDistance
    };
})();
var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function(req,res) {

    sendJsonResponse(res, 200, {"status" : "success"});


};

module.exports.locationsListByDistance = function(req,res) {

    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);
    var point = {
        type: "Point",
        coordinates: [lng, lat]
    };
    var geoOptions = {
        spherical: true,
        maxDistance: theEarth.gerRadsFromDistance(20),
        num: 10
    }
    Loc.geoNear(point, geoOptions, callback)
    sendJsonResponse(res, 200, {"status" : "success"});


};

module.exports.locationsReadOne = function(req,res) {

    if(req.params && req.params.locationid){
        Loc.findById(req.params.locationid)
            .exec(function(err,location){
                if(!location){
                    sendJsonResponse(res, 404,{
                        "message": "locationid not found"
                    });
                    return;

                }else if(err){
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, location);

            });
    }else{
        sendJsonResponse(res, 404, {
            "message" : "No location in request"
        });
    }

};

module.exports.locationsUpdateOne = function(req,res) {

    sendJsonResponse(res, 200, {"status" : "success"});


};

module.exports.locationsDeleteOne = function(req,res) {

    sendJsonResponse(res, 200, {"status" : "success"});


};
