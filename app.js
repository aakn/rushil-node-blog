/* globals process:true, require:true, console:true */
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var path = require('path');
var less = require('less-middleware');
var minify = require('express-minify');
//var getsmart = require('getsmart-js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.logger('dev'));
//app.use(getsmart({
//    compress: true,
//    isProduction: false,
//    src: path.join(__dirname + '/public')
//}));
app.use(express.compress());
app.use(minify());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here --- my secret'));
app.use(express.session());
app.use(less({
    root: path.join(__dirname, 'public'),
    src: '/less',
    paths: ['/less/bootstrap'],
    dest: '/css',
    compress: true,
    debug: true,
    yuicompress: true,
    optimization: 2
}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 86400000 }));


// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

routes(app);

app.listen(app.get('port'));
