
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes/routes'),
    http = require('http'),
    path = require('path'),
    less = require('less'),
    jade = require('jade'),
    connect = require('connect'),
    ConnectCouchDB = require('connect-couchdb')(connect);

var app = express();
var memStore = new ConnectCouchDB({
    name: 'sessions_4_phpstormtest',
    reapInterval: 1000 * 60 * 10,
    compactInterval: 1000 * 60 * 5,
    setThrottle: 1000 * 60
});
var secret = '4_phpstormtes_secret';

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view options', { layout: false });
    //app.use(express.session({secret: 'blubberich', store: store}));
    app.use(express.logger('dev'));
    app.use(express.favicon());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser(secret));
    app.use(express.session({store: memStore, key: secret}));
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function(){
    app.use(express.errorHandler());
});


app.get('/', routes.index);
app.get('/about', routes.about);
app.post('/', routes.indexPost);


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});