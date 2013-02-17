
/*
 * GET users listing.
 */

exports.list = function(req, res){
    console.log(req.session);
  res.send("username set");
};