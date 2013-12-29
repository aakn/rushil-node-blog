/* globals require:true, exports:true, module:true */
/**
 * GET home page.
 */

"use strict";
var crypto = require('crypto');
var qs = require('querystring');

function init(app) {


    app.get('/', function(req, res) {

        var params = {
            s: 896
        };

        res.render('index', {
            title: 'Rushil Kekre',
            src: {
                main: getImageSrc('rushil.kekre@outlook.com', params),
                secondary: getImageSrc('aliroks@gmail.com', params)
            }
        });
    });

    /**
     *
     * @param {String} email
     * @param {object} params
     * @param {boolean} [doNotCache] Default = True if env is dev. If set to true, adds a timestamp to the url to prevent browser from using cached image
     * @returns {string} the image source
     */
    function getImageSrc(email, params, doNotCache) {

        if (!email) {
            return null;
        }

        if (doNotCache || app.get('env') === 'development') {
            params.current_time = new Date().getTime();
        }

        var hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
        var querystring = qs.encode(params);
        return 'https://s.gravatar.com/avatar/' + hash + '?' + querystring;
    }

}

module.exports = init;