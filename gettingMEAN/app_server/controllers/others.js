/**
 * Created by asimcraft on 1/15/16.
 */

/* GET Homepage */
module.exports.about = function(req, res){
    res.render('generic-text', {title: 'About'});
}