/* globals require:true, exports:true */
/**
 * GET home page.
 */

"use strict";
var crypto = require('crypto');
var qs = require('querystring');


exports.index = function (req, res) {

    var params = {
        s: 300
    };

    res.render('index', {
        title: 'Rushil Kekre',
        src: {
            main: getImageSrc('aliasgar@outlook.com', params),
            secondary: getImageSrc('aliroks@gmail.com', params)
        }
    });
};

/**
 *
 * @param {String} email
 * @param {object} params
 * @returns {string} the image source
 */
function getImageSrc(email, params) {
    var hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    var querystring = qs.encode(params);
    return 'https://s.gravatar.com/avatar/' + hash + '?' + querystring;
}