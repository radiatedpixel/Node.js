exports.index = function(req, res){
    console.log('userName: ' + req.session.userName);
    res.render('index', { title: 'MyTitle', userName: req.session.userName});

};
exports.about = function(req, res){
    res.render('index', { title: 'About'});
};
exports.indexPost = function(req, res){
    var username = req.body.username;
    req.session.userName = username;
    res.redirect('/');
    console.log('set username to ' + username);
};